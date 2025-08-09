import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    className='py-20 text-white bg-black min-h-screen'>

     <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400">About This Project</h1>

        <p className="text-lg leading-relaxed text-gray-300">
          This project is a personality classification tool designed to predict whether someone is an introvert or an extrovert based on a few insightful questions.
          It combines machine learning and a user-friendly interface to deliver personalized feedback in a visually engaging way.
        </p>

        <div className="border-t border-gray-700 pt-10">
          <h2 className="text-3xl font-semibold text-teal-300">About Me</h2>
          <p className="text-md text-gray-400 mt-4">
            I'm a passionate developer with a strong interest in psychology and artificial intelligence. This project is my attempt to blend those two worlds by building
            something interactive, fun, and meaningful. I hope it sparks curiosity and helps people better understand their personality.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-10">
          <h2 className="text-3xl font-semibold text-teal-300">Why This Matters</h2>
          <p className="text-md text-gray-400 mt-4">
            Understanding personality types helps improve communication, relationships, and personal growth. By using data-driven predictions,
            we aim to make this understanding more accessible and insightful for everyone.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
