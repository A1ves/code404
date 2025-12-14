"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Github, CheckCircle } from "lucide-react"
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer } from "@/components/animations"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@code404.com.br",
    href: "mailto:contato@code404.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "#",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeIn}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4"
          >
            Contato
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Vamos criar algo <span className="text-primary">incrível</span> juntos?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Entre em contato e vamos conversar sobre como podemos transformar suas ideias em realidade.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="lg:col-span-3"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-card border border-border transition-colors duration-300 rounded-2xl p-8"
              whileHover={{ borderColor: "#f0532a" }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-secondary border-border focus:border-primary transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-secondary border-border focus:border-primary transition-colors"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-secondary border-border focus:border-primary transition-colors min-h-[150px] resize-none"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg group transition-all duration-300"
                  disabled={isSubmitted}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="mr-2 w-5 h-5" />
                        Mensagem Enviada!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center"
                      >
                        Enviar Mensagem
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="lg:col-span-2"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="group flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <div className="text-sm text-muted-foreground mb-4">Siga-nos nas redes</div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
