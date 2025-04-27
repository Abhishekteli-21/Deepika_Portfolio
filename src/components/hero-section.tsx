"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black z-0"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        {/* Mobile-first approach: Image appears above content on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 p-4 flex justify-center mb-8 md:mb-0 order-first md:order-last"
        >
          <div className="relative">
            {/* Subtle glow, reduced intensity */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-20 animate-pulse"></div>
            
            {/* Photo frame with simple border */}
            <div className="relative">
              <Image
                src="/images/mypic.png"
                alt="Deepika S U"
                width={288}
                height={288}
                className="object-cover rounded-xl border-2 border-purple-500/40 relative z-10"
                style={{ padding: "4px", background: "rgba(0,0,0,0.7)" }}
              />
            </div>
            
            {/* Subtle floating animation */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-4 order-last md:order-first"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-purple-400">Hello, I&apos;m </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300">
              Deepika S U
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            AI & ML Engineering Student | Data Science Enthusiast
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-400 mb-8 border-l-2 border-purple-500 pl-4"
          >
            Transforming complex data into strategic insights that drive innovation and create impactful solutions.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 text-lg">
            <Link href="#contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all shadow-md shadow-purple-500/20"
              >
                Contact Me
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 hover:bg-purple-500/20 transition-colors backdrop-blur-sm"
              >
                My Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-2">Scroll Down</p>
          <div className="w-5 h-10 rounded-full border-2 border-purple-400 flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}