"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle2, Users, Target, Lightbulb, Rocket } from "lucide-react"
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer } from "@/components/animations"

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos sempre as melhores e mais modernas soluções.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é pensado para gerar impacto real no seu negócio.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes em cada etapa.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Compromisso com prazos e qualidade em todos os projetos.",
  },
]

const highlights = [
  "Equipe multidisciplinar de especialistas",
  "Metodologia ágil de desenvolvimento",
  "Suporte contínuo pós-lançamento",
  "Código limpo e documentado",
  "Performance e SEO otimizados",
  "Design responsivo para todos os dispositivos",
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        style={{ y: floatingY }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeIn}
              className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4"
            >
              Sobre Nós
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Por que escolher a <span className="text-primary">Code404</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Somos uma agência de desenvolvimento web apaixonada por transformar ideias em experiências digitais
              memoráveis. Com mais de 5 anos no mercado, combinamos criatividade, tecnologia e estratégia para entregar
              resultados que superam expectativas.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Nosso nome, <span className="text-primary font-semibold">Code404</span>, representa nossa filosofia:
              transformamos o que seria um erro em uma oportunidade de criar algo extraordinário.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  custom={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05, type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Image/Visual */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-8xl md:text-9xl font-bold text-primary/20"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    404
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold text-foreground -mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Error? No, <span className="text-primary">Experience!</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 17 }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: 5 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 400, damping: 17 }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
