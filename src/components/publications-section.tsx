"use client"

import { motion } from "framer-motion"

export default function PublicationsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Publications
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="bg-gray-900/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Leaf Disease Detection Using Deep Learning: A Survey
          </h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="text-gray-400">
              <strong className="text-white">Paper ID:</strong> 145
            </span>
            <span className="text-gray-400">
              <strong className="text-white">Conference:</strong> 2nd International Conference on Artificial
              Intelligence, Computing Technologies, Internet of Things (IoT) and Data Analytics (AICTA-2024)
            </span>
          </div>
          <p className="text-gray-300 mb-4">National Institute of Technology Raipur, India, November 2024</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full hover:bg-purple-800/50 transition-colors">
              Deep Learning
            </span>
            <span className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full hover:bg-purple-800/50 transition-colors">
              Agriculture
            </span>
            <span className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full hover:bg-purple-800/50 transition-colors">
              Computer Vision
            </span>
            <span className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full hover:bg-purple-800/50 transition-colors">
              Research
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
