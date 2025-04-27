"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
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
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="bg-black rounded-xl p-8 border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="flex flex-col justify-between"
          >
            <div className="bg-black rounded-xl p-8 border border-purple-500/20 mb-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                    <FaEnvelope className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a
                      href="mailto:deepikaumesh20@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      deepikaumesh20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                    <FaPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <a href="tel:+917022541900" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +91 7022541900
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                    <FaMapMarkerAlt className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-gray-300">Shimoga, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-xl p-8 border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Connect With Me</h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-purple-400 text-xl" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
