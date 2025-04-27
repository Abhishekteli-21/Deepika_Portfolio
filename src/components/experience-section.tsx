"use client"

import { motion } from "framer-motion"

export default function ExperienceSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const experiences = [
    {
      period: "May 2024 - July 2024",
      title: "Data Science Hybrid Internship",
      company: "Acharya4Life",
      description:
        "Gained hands-on experience in Python, Applied Statistics, Supervised and Unsupervised Learning, Ensemble Techniques, Featurisation, Model Selection Tuning, Recommendation Systems, Neural Networks, Deep Learning, Computer Vision, and Natural Language Processing (NLP).",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      period: "Oct 2023 - Nov 2023",
      title: "AI & ML Internship",
      company: "GTTC Hubli",
      description:
        "Developed a smart assistant to aid communication for the deaf and dumb. Enhanced Python skills and worked on gesture recognition and real-time video processing.",
      skills: ["Python", "Gesture Recognition", "Computer Vision", "Real-time Processing"],
    },
  ]

  return (
    <section id="experience" className="py-20">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeIn}
              className="bg-gray-900/50 rounded-xl p-8 hover:bg-gray-800/50 transition-colors border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-purple-400 font-semibold">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-gray-400 mt-1">{exp.company}</p>
                </div>
                <div className="md:w-3/4 md:pl-8 border-l border-purple-500/30">
                  <p className="text-gray-300">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full hover:bg-purple-800/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
