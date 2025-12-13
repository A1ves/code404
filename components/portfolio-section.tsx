"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { fadeInUp, fadeIn, fadeInLeft, staggerContainer } from "@/components/animations"

// Prefixo para imagens - use variável de ambiente GITHUB_PAGES=true para GitHub Pages
const imagePrefix = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/code404' : ''

const projects = [
  {
    title: "Burgueirismo",
    category: "Hamburgueria",
    description: "Plataforma de pedidos para hamburgueria, com detalhes minimalista e animações.",
    image: `${imagePrefix}/burgueirismo-site.png`,
    color: "from-blue-500/20",
    url: "https://burgueirismo.code404.com.br",
  },
  {
    title: "Café Serra",
    category: "Cafeteria",
    description: "Loja virtual de de cafés.",
    image: `${imagePrefix}/cafeteriaserra.png`,
    color: "from-pink-500/20",
    url: "https://cafeteriaserra.code404.com.br",
  },
  {
    title: "Aurora Confeitaria",
    category: "Confeitaria",
    description: "Landing page de alta conversão para confeitaria com animações impactantes.",
    image: `${imagePrefix}/auroraconfeitaria.png`,
    color: "from-green-500/20",
    url: "https://auroraconfeitaria.code404.com.br",
  },
  {
    title: "Urban Studio",
    category: "Site Institucional",
    description: "Website para estúdio de arquitetura com galeria de projetos.",
    image: `${imagePrefix}/architecture-portfolio-dark-minimal.jpg`,
    color: "from-amber-500/20",
  },
  {
    title: "FitPro Academy",
    category: "Sistema Web",
    description: "Plataforma de aulas fitness com streaming e gestão de alunos.",
    image: `${imagePrefix}/fitness-app-dark-theme-workout.jpg`,
    color: "from-red-500/20",
  },
  {
    title: "Legal Partners",
    category: "Site Institucional",
    description: "Website corporativo para escritório de advocacia com formulário de casos.",
    image: `${imagePrefix}/law-firm-website-dark-professional.jpg`,
    color: "from-indigo-500/20",
  },
]

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
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
              Portfólio
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Trabalhos
              <br />
              <span className="text-primary">selecionados</span>
            </motion.h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            Conheça alguns dos projetos que desenvolvemos para clientes de diversos segmentos.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => project.url && window.open(project.url, '_blank', 'noopener,noreferrer')}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image || `${imagePrefix}/placeholder.svg`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`} />

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center gap-2 text-primary"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: isHovered ? 0 : 20, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="font-medium">Ver Projeto</span>
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="text-xs text-primary font-medium uppercase tracking-wider"
                    >
                      {project.category}
                    </motion.span>
                    <motion.div
                      animate={{
                        x: isHovered ? 3 : 0,
                        y: isHovered ? -3 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <ArrowUpRight
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isHovered ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/0 pointer-events-none"
                  animate={{
                    borderColor: isHovered ? "rgba(var(--primary), 0.3)" : "rgba(var(--primary), 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
