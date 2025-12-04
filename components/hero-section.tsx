"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { AnimatedCharacters, fadeInUp, staggerContainer } from "@/components/animations"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      container.style.setProperty("--mouse-x", `${x * 20}px`)
      container.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"
        style={{ opacity }}
      />

      {/* Floating Elements with Parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        style={{
          y,
          transform: "translate(var(--mouse-x), var(--mouse-y))",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.3,
        }}
      />

      {/* Grid Pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ opacity }}
      />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ y, opacity, scale }}
      >

        {/* Main Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
        >
          <motion.span 
            className="block"
            variants={fadeInUp}
          >
            O{" "}
            <span className="relative inline-block">
              {/* 404 Container with Glitch Effects */}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glitch flash */}
                <motion.span
                  className="absolute inset-0 bg-primary/20 blur-xl rounded-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                
                {/* First 4 */}
                <motion.span
                  className="relative inline-block text-primary"
                  initial={{ opacity: 0, x: -30, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
                >
                  <span className="relative">
                    4
                    {/* Glitch layer */}
                    <motion.span
                      className="absolute inset-0 text-cyan-400"
                      style={{ clipPath: "inset(20% 0 30% 0)" }}
                      animate={{ x: [0, -4, 4, -2, 0], opacity: [0, 1, 1, 1, 0] }}
                      transition={{ duration: 0.2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      4
                    </motion.span>
                  </span>
                </motion.span>

                {/* Zero - the "error" center */}
                <motion.span
                  className="relative inline-block text-primary mx-1"
                  initial={{ scale: 0, rotate: -360 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                >
                  <span className="relative">
                    {/* Main 0 */}
                    <motion.span
                      className="relative z-10"
                      animate={{ 
                        textShadow: [
                          "0 0 0px transparent",
                          "0 0 20px rgba(255,107,53,0.8)",
                          "0 0 0px transparent"
                        ]
                      }}
                      transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
                    >
                      0
                    </motion.span>
                    
                    {/* Glitch layers for 0 */}
                    <motion.span
                      className="absolute inset-0 text-red-500"
                      style={{ clipPath: "inset(40% 0 20% 0)" }}
                      animate={{ 
                        x: [0, -6, 6, -3, 3, 0],
                        opacity: [0, 1, 1, 1, 1, 0]
                      }}
                      transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatDelay: 2.5 }}
                    >
                      0
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 text-blue-500"
                      style={{ clipPath: "inset(60% 0 10% 0)" }}
                      animate={{ 
                        x: [0, 5, -5, 2, -2, 0],
                        opacity: [0, 1, 1, 1, 1, 0]
                      }}
                      transition={{ duration: 0.4, delay: 1.35, repeat: Infinity, repeatDelay: 2.5 }}
                    >
                      0
                    </motion.span>
                    
                    {/* Scan line effect */}
                    <motion.span
                      className="absolute inset-0 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.1, delay: 1.4, repeat: Infinity, repeatDelay: 2.8 }}
                    >
                      <span 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                        style={{ transform: "translateY(-100%)", animation: "scanline 0.1s linear forwards" }}
                      />
                    </motion.span>
                  </span>
                </motion.span>

                {/* Second 4 */}
                <motion.span
                  className="relative inline-block text-primary"
                  initial={{ opacity: 0, x: 30, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 120 }}
                >
                  <span className="relative">
                    4
                    {/* Glitch layer */}
                    <motion.span
                      className="absolute inset-0 text-green-400"
                      style={{ clipPath: "inset(50% 0 10% 0)" }}
                      animate={{ x: [0, 3, -3, 2, 0], opacity: [0, 1, 1, 1, 0] }}
                      transition={{ duration: 0.2, delay: 1.6, repeat: Infinity, repeatDelay: 3.2 }}
                    >
                      4
                    </motion.span>
                  </span>
                </motion.span>
                
                {/* Decorative elements */}
                <motion.span
                  className="absolute -top-4 -right-6 text-[10px] font-mono text-red-500 bg-red-500/10 px-1 rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  ERROR
                </motion.span>
                
                <motion.span
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono text-muted-foreground/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.3 }}
                >
                  page_not_found
                </motion.span>
              </motion.span>
              
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </span>
            {" "}nunca foi
          </motion.span>
          
          <motion.span 
            className="block mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            tão bem{" "}
            <span className="relative inline-block">
              <motion.span
                className="text-primary relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
              >
                resolvido
              </motion.span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 6C50 6 50 2 100 2C150 2 150 10 200 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                />
              </motion.svg>
              
              {/* Checkmark success indicator */}
              <motion.span
                className="absolute -right-8 top-1/2 -translate-y-1/2 text-green-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                  />
                </svg>
              </motion.span>
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Somos uma agência de desenvolvimento web especializada em criar soluções digitais que convertem visitantes em
          clientes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <a href="#contato">
                Fale com a Code404
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent"
            >
              <a href="#portfolio">
                <Code2 className="mr-2 w-5 h-5" />
                Ver Projetos
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "5+", label: "Anos de Experiência" },
            { value: "24h", label: "Suporte Dedicado" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
