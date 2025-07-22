"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-3"
          : "bg-background/80 backdrop-blur-sm border-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
          Manuel Tejada
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#proyectos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="#experiencia"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Experiencia
          </Link>
          <Link
            href="#habilidades"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Habilidades
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
