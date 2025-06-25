// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white pt-20">
      <div className="max-w-4xl text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Supercharge Learning with <span className="text-indigo-600">AI</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-6"
        >
          Str-ai-ver helps you learn faster, smarter, and deeper using generative AI.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Get Started
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex justify-center"
        >
          <Sparkles className="text-indigo-500 w-8 h-8 animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero