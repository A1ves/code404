"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Globe, Zap, Settings, Palette } from "lucide-react"
import { fadeInUp, fadeIn, staggerContainer } from "@/components/animations"

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Websites profissionais que transmitem a identidade da sua marca e convertem visitantes em clientes.",
    features: ["Design Responsivo", "SEO Otimizado", "Alta Performance"],
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em resultados, com design persuasivo e call-to-actions estratégicos.",
    features: ["A/B Testing", "Analytics", "Conversão Maximizada"],
  },
  {
    icon: Settings,
    title: "Sistemas Web",
    description: "Aplicações web personalizadas que automatizam processos e aumentam a produtividade do seu negócio.",
    features: ["Dashboards", "APIs", "Integrações"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Design de interfaces intuitivas e experiências memoráveis que encantam seus usuários.",
    features: ["Prototipagem", "Design System", "Branding"],
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
        style={{ y: backgroundY }}
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
            Nossos Serviços
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Soluções completas para
            <br />
            <span className="text-primary">seu negócio digital</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Do conceito à execução, entregamos projetos que fazem a diferença.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="group relative bg-card border border-border rounded-2xl p-8 transition-colors duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex + 0.3 }}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
