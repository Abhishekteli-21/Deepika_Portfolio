"use client"

import { motion } from "framer-motion"

export default function CertificationsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const certifications = [
    { name: "Data Science using Python", provider: "NPTEL", icon: "📊" },
    { name: "Google Cybersecurity", provider: "COURSERA", icon: "🔒" },
    { name: "Joy of Computing Using Python", provider: "NPTEL", icon: "💻" },
    { name: "Artificial Intelligence", provider: "INFOSYS-Springboard", icon: "🤖" },
    { name: "Cloud Computing", provider: "NPTEL", icon: "☁️" },
    { name: "Ethical Hacker", provider: "Cisco Networking Academy", icon: "🛡️" },
    { name: "Cloud Practitioner", provider: "AWS", icon: "☁️" },
    { name: "Salesforce Administrator Virtual Internship", provider: "SMART INTERNZ", icon: "🏢" },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              className="bg-black rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-xl text-3xl group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-center text-sm">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
