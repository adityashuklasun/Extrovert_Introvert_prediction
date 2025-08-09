import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

function explanatory() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white font-sans ">
        {/* Intro Section */}
        <section className=" min-h-[50vh] flex items-center justify-center px-0 py-20 text-center py-50">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-5xl font-bold text-pink-400">Introvert or Extrovert</h1>
            <p className="text-lg text-gray-300">
              Humans are complex. Some recharge in solitude, others thrive in crowds.But to say one good over other is just as you compare doctors and engineers.Both are crucial to society and they contribute very much in their own way
            </p>
          </div>
        </section>

        {/* Introverts Section */}
        <section className="px-10 py-20 bg-gray-950 text-left">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-300">Introverts</h2>
              <p className="mt-4 text-gray-400">
                Introverts often feel energized by spending time alone. They tend to reflect deeply, think before speaking, and prefer meaningful conversations.
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-400 space-y-2">
                <li><strong>Strengths:</strong> Deep focus, self-awareness, independence</li>
                <li><strong>Challenges:</strong> Social exhaustion, underestimation in teams</li>
              </ul>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2282/2282841.png"
              alt="Introvert"
              className="w-full max-w-sm mx-auto drop-shadow-lg"
            />
          </div>
        </section>

        {/* Extroverts Section */}
        <section className="px-10 py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Extrovert"
              className="w-full max-w-sm mx-auto drop-shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold text-pink-400">Extroverts</h2>
              <p className="mt-4 text-gray-400">
                Extroverts gain energy from social interactions. They're expressive, outgoing, and often comfortable leading conversations and engaging with groups.
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-400 space-y-2">
                <li><strong>Strengths:</strong> Communication, teamwork, adaptability</li>
                <li><strong>Challenges:</strong> Impulsiveness, fear of solitude</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              So... which one are you?
            </h2>
            <p className="text-lg text-gray-400">
              Our machine learning model is designed to understand you better based on your answers to carefully curated questions.
              Discover your personality style through Kritrim Buddhi.
            </p>
            <div>
              <Link to="/model" className='m-7'>
                <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition">
                  Let's Predict yours
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>


    </motion.div>
  )
}

export default explanatory
