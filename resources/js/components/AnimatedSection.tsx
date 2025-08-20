import type React from "react"
import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 })

  // Configurar las clases de animación según la dirección
  const getAnimationClasses = () => {
    if (!isInView) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-10"
        case "down":
          return "opacity-0 -translate-y-10"
        case "left":
          return "opacity-0 translate-x-10"
        case "right":
          return "opacity-0 -translate-x-10"
        case "none":
          return "opacity-0"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  const delayClass = delay ? `delay-[${delay}ms]` : ""

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${getAnimationClasses()} transition-all duration-700 ease-out ${delayClass} ${className}`}
    >
      {children}
    </section>
  )
}
