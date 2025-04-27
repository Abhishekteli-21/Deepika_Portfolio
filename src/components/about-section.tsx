"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="md:col-span-7"
          >
            <p className="text-lg mb-6 text-gray-300">
              As an AI and ML engineering student, I excel at transforming complex data into strategic insights that
              drive innovation. With a problem-solving mindset and expertise in AI-driven automation, I aim to tackle
              real-world challenges.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              My goal is to deliver transformative solutions across industries, leveraging cutting-edge technology to
              create meaningful impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                  <FaEnvelope className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Email</h3>
                  <a
                    href="mailto:deepikaumesh20@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    deepikaumesh20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                  <FaPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Phone</h3>
                  <a href="tel:+917022541900" className="text-white hover:text-purple-400 transition-colors">
                    7022541900
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Location</h3>
                  <p className="text-white">Shimoga</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                  <FaLinkedin className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">LinkedIn</h3>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
            className="md:col-span-5 bg-gradient-to-br from-purple-900/30 to-black p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Personal Strengths</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-300">Problem Solving</span>
                <span className="text-gray-400">95%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-300">Creativity</span>
                <span className="text-gray-400">90%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                ></motion.div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-300">Data Analysis</span>
                <span className="text-gray-400">85%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-300">Stress Management</span>
                <span className="text-gray-400">88%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
