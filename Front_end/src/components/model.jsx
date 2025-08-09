import React, { useState } from "react";
import { motion } from "framer-motion";

function Model() {
  const [formData, setFormData] = useState({
    Time_spent_Alone: "",
    Stage_fear: "",
    Social_event_attendance: "",
    Going_outside: "",
    Drained_after_socializing: "",
    Friends_circle_size: "",
    Post_frequency: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const API_URL = "https://extrovert-introvert-prediction-4.onrender.com/api/predict";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch( API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex justify-center items-center p-20"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-xl w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Personality Type Predictor
        </h1>

        <div>
          <label className="block mb-1">
            1. How many hours per day do you spend alone?
          </label>
          <input
            type="number"
            name="Time_spent_Alone"
            min="0"
            max="24"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">
            2. Do you have fear of public speaking?
          </label>
          <select
            name="Stage_fear"
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700"
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">
            3. How many social events do you attend monthly?
          </label>
          <input
            type="number"
            name="Social_event_attendance"
            min="0"
            max="100"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">
            4. How often do you go outside (days/month)?
          </label>
          <input
            type="number"
            name="Going_outside"
            min="0"
            max="31"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">
            5. Do you feel drained after socializing?
          </label>
          <select
            name="Drained_after_socializing"
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700"
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">
            6. How many close friends do you have?
          </label>
          <input
            type="number"
            name="Friends_circle_size"
            min="0"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">
            7. How frequently do you post on social media (posts/month)?
          </label>
          <input
            type="number"
            name="Post_frequency"
            min="0"
            required
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-bold"
          >
            Predict Personality
          </button>
        </div>

        {result && (
          <div className="mt-6 text-center bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-2">Prediction Result</h2>
            <p>
              You are likely an{" "}
              <span className="font-bold text-blue-400">{result.prediction}</span>
            </p>
            {result.probability && (
              <div className="mt-2 text-sm text-gray-300">
                <p>
                  Introvert:{" "}
                  {(result.probability.Introvert * 100).toFixed(1)}%
                </p>
                <p>
                  Extrovert:{" "}
                  {(result.probability.Extrovert * 100).toFixed(1)}%
                </p>
              </div>
            )}
          </div>
        )}
      </form>
    </motion.div>
  );
}

export default Model;
