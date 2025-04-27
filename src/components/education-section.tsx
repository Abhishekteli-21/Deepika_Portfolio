"use client"

import { motion } from "framer-motion"

export default function EducationSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const educationData = [
    {
      degree: "Bachelor's of Engineering",
      field: "Artificial Intelligence and Machine Learning",
      period: "2021 - Present",
      institution: "Alva's Institute of Engineering and Technology, Mijar",
      score: "CGPA: 8.8",
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
        </svg>
      ),
    },
    {
      degree: "Department of Pre-University",
      field: "Class XII",
      period: "2021",
      institution: "Sri Adhichunchanagiri Independent PU College, Shimoga",
      score: "Percentage: 95.3%",
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      degree: "Secondary School Leaving Certificate",
      field: "Class X",
      period: "2019",
      institution: "Sri Adhichunchanagiri Shikshana Trust, Shimoga",
      score: "Percentage: 96%",
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Education
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-12 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line - only visible on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-purple-500/30"></div>

          {/* Mobile Vertical Line - only visible below md */}
          <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-purple-500/30"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeIn}
              className="relative mb-12 last:mb-0"
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                {/* Left side content */}
                <div className={`w-1/2 pr-12 text-left ${index % 2 !== 0 ? "invisible" : ""}`}>
                  {index % 2 === 0 && (
                    <div className="bg-black p-6 rounded-lg shadow-md border border-purple-500/20 hover:border-purple-500/50 transition-all ml-auto max-w-md">
                      <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.degree}</h3>
                      <h4 className="text-lg text-white">{item.field}</h4>
                      <p className="text-gray-400 mt-2">{item.period}</p>
                      <p className="text-gray-300 mt-2">{item.institution}</p>
                      <p className="mt-2 inline-block bg-purple-500/20 px-3 py-1 rounded text-purple-300">
                        {item.score}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-4 border-purple-500 absolute left-1/2 transform -translate-x-1/2">
                  {item.icon}
                </div>

                {/* Right side content */}
                <div className={`w-1/2 pl-12 text-left ${index % 2 === 0 ? "invisible" : ""}`}>
                  {index % 2 !== 0 && (
                    <div className="bg-black p-6 rounded-lg shadow-md border border-purple-500/20 hover:border-purple-500/50 transition-all max-w-md">
                      <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.degree}</h3>
                      <h4 className="text-lg text-white">{item.field}</h4>
                      <p className="text-gray-400 mt-2">{item.period}</p>
                      <p className="text-gray-300 mt-2">{item.institution}</p>
                      <p className="mt-2 inline-block bg-purple-500/20 px-3 py-1 rounded text-purple-300">
                        {item.score}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Layout - all items on the right of the timeline */}
              <div className="md:hidden flex items-start">
                {/* Timeline dot */}
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black border-4 border-purple-500 mr-4">
                  {item.icon}
                </div>

                {/* Content always on the right for mobile */}
                <div className="flex-grow bg-black p-5 rounded-lg shadow-md border border-purple-500/20 max-w-xs sm:max-w-sm">
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">{item.degree}</h3>
                  <h4 className="text-base text-white">{item.field}</h4>
                  <p className="text-sm text-gray-400 mt-1">{item.period}</p>
                  <p className="text-sm text-gray-300 mt-1">{item.institution}</p>
                  <p className="mt-2 inline-block bg-purple-500/20 px-2 py-0.5 text-sm rounded text-purple-300">
                    {item.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}