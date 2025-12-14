"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

type IntroSplashProps = {
  /** chamado quando a animação terminar (depois da tela descer) */
  onDone: () => void
  /** caminho da logo no /public */
  logoSrc?: string
}

export default function IntroSplash({ onDone, logoSrc = "/LOGOCODE-LRJ.png" }: IntroSplashProps) {
  const controls = useAnimation()

  useEffect(() => {
    let mounted = true

    async function run() {
      // reset
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0 } })

      // 0% -> 100% preenchimento em 3s
      await controls.start({
        opacity: 1,
        transition: { duration: 0.2 },
      })

      // aguarda o preenchimento (feito no overlay de cor)
      await new Promise((r) => setTimeout(r, 3000))

      // desce a tela
      await controls.start({
        y: "100%",
        transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
      })

      if (mounted) onDone()
    }

    run()

    return () => {
      mounted = false
    }
  }, [controls, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-hidden bg-primary"
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
    >
      {/* overlay com a cor de fundo crescendo 0% -> 100% em 3s (começa laranja e vira fundo) */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* logo central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={logoSrc}
          alt="Logo"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </motion.div>
  )
}
