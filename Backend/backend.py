from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

model = load_model("my_neural_network_model.keras")

with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)
with open("stage_fear_encoder.pkl", "rb") as f:
    stage_fear_encoder = pickle.load(f)
with open("drained_encoder.pkl", "rb") as f:
    drained_encoder = pickle.load(f)
with open("label_encoder_y.pkl", "rb") as f:
    label_encoder_y = pickle.load(f)

@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

    
        stage_fear_val = stage_fear_encoder.transform([data.get("Stage_fear", "")])[0]
        drained_val = drained_encoder.transform([data.get("Drained_after_socializing", "")])[0]

      
        numeric_vals = [
            float(data.get("Time_spent_Alone", 0)),
            float(data.get("Social_event_attendance", 0)),
            float(data.get("Going_outside", 0)),
            float(data.get("Friends_circle_size", 0)),
            float(data.get("Post_frequency", 0))
        ]

     
        numeric_scaled = scaler.transform([numeric_vals])[0]

       
        final_features = np.concatenate([numeric_scaled, [stage_fear_val, drained_val]]).reshape(1, -1)

        prob = model.predict(final_features)[0][0]
        pred_class = int(prob >= 0.5)
        pred_label = label_encoder_y.inverse_transform([pred_class])[0]

        return jsonify({
            "prediction": pred_label,
            "probability": {
                label_encoder_y.classes_[0]: float(1 - prob),
                label_encoder_y.classes_[1]: float(prob)
            }
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(port=5000, debug=True)
