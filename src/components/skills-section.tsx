"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 80 },
    { name: "Data Science", level: 85 },
    { name: "Microsoft Excel", level: 75 },
    { name: "PowerBI", level: 70 },
  ]

  const softSkills = [
    {
      name: "Problem Solving",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: "Creativity",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Stress Management",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Teamwork",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

  const strengths = [
    { name: "Solo-dining", description: "Comfortable with independent work and self-management" },
    { name: "Alms-giving", description: "Strong belief in sharing knowledge and helping others" },
  ]

  return (
    <section id="skills" className="py-20">
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
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="bg-gray-900/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Technical Skills</h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg text-white">{skill.name}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ml-1 ${i <= Math.round(skill.level / 20) ? "bg-purple-500" : "bg-gray-700"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="bg-gray-900/50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills</h3>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-black p-4 rounded-lg flex items-center hover:bg-gray-900 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/40 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Strengths</h3>

              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{strength.name}</h4>
                      <p className="text-gray-400">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
