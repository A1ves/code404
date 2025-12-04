"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"
import { forwardRef } from "react"

// Variantes de animação pré-definidas
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Componentes de animação reutilizáveis
interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, delay = 0, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.section>
    )
  }
)
AnimatedSection.displayName = "AnimatedSection"

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
}

export const AnimatedDiv = forwardRef<HTMLDivElement, AnimatedDivProps>(
  ({ children, className, variants = fadeInUp, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={variants}
        transition={{ delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedDiv.displayName = "AnimatedDiv"

interface AnimatedTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedText = forwardRef<HTMLSpanElement, AnimatedTextProps>(
  ({ children, className, delay = 0, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay }}
        className={className}
        style={{ display: "inline-block" }}
        {...props}
      >
        {children}
      </motion.span>
    )
  }
)
AnimatedText.displayName = "AnimatedText"

// Componente para animação de texto caractere por caractere
interface AnimatedCharactersProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedCharacters({ text, className, delay = 0 }: AnimatedCharactersProps) {
  const characters = text.split("")

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainerFast}
      className={className}
      style={{ display: "inline-block" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
                delay: delay + index * 0.02,
              },
            },
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Componente para animação de linha
interface AnimatedLineProps {
  className?: string
  delay?: number
  direction?: "left" | "right" | "center"
}

export function AnimatedLine({ className, delay = 0, direction = "left" }: AnimatedLineProps) {
  const variants: Variants = {
    hidden: {
      scaleX: 0,
      originX: direction === "left" ? 0 : direction === "right" ? 1 : 0.5,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    />
  )
}

// Componente de hover com efeito magnético
interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 0.5 }: MagneticProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

// Componente de reveal com máscara
interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  width?: "fit-content" | "100%"
}

export function Reveal({ children, className, delay = 0, width = "fit-content" }: RevealProps) {
  return (
    <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        whileInView={{ left: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--primary)",
          zIndex: 20,
        }}
      />
    </div>
  )
}
