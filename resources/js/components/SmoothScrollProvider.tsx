"use client"

import { type ReactNode, useEffect } from "react"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Función para suavizar el scroll
    const smoothScroll = (e: Event) => {
      if ((e.target as HTMLElement).tagName === "A") {
        const href = (e.target as HTMLAnchorElement).getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const targetId = href.replace("#", "")
          const targetElement = document.getElementById(targetId)

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Añadir event listener para los clicks en enlaces
    document.addEventListener("click", smoothScroll)

    return () => {
      document.removeEventListener("click", smoothScroll)
    }
  }, [])

  return <>{children}</>
}
