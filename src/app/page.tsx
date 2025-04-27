"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"
import PublicationsSection from "@/components/publications-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Use useMemo to prevent sections array from being recreated on every render
  const sections = useMemo(() => [
    "home", "about", "education", "experience", "skills", "certifications", "publications", "contact"
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Find which section is currently in view
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-purple-400">
            Deepika S U
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div
                className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}
              ></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`capitalize transition-colors hover:text-purple-400 ${
                      activeSection === section ? "text-purple-400 font-semibold" : ""
                    }`}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-gray-900"
            >
              <nav className="container mx-auto px-4 py-4">
                <ul className="flex flex-col space-y-3">
                  {sections.map((section) => (
                    <li key={section}>
                      <a
                        href={`#${section}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 capitalize transition-colors hover:text-purple-400 ${
                          activeSection === section ? "text-purple-400 font-semibold" : ""
                        }`}
                      >
                        {section}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <PublicationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Deepika S U. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}