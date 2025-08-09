import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className='bg-black min-h-screen'
    >
      <div className="w-full max-w-2xl bg-[#000000] p-8 rounded-2xl shadow-lg border border-gray-800 m-auto ">
        <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-300 text-center mb-10">
          We'd love to hear your thoughts on our personality predictor. Drop your feedback or questions below.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1e1e2f] text-white outline-none border border-gray-600 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 rounded bg-[#1e1e2f] text-white outline-none border border-gray-600 focus:border-teal-500"
            />
          </div>
          <button

            onClick={() => {
              window.location.href = "mailto:9140adi@gmail.com";
            }}
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 transition-all duration-300 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
