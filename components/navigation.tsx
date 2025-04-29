"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Products", href: "/products", translationKey: "Products" }, // Changed href to /products
  { name: "Use Cases", href: "/#case-studies", translationKey: "Use Cases" }, // Ensure homepage anchors work
  { name: "About Neura", href: "/#leadership", translationKey: "About Neura" }, // Ensure homepage anchors work
]

export function Navigation() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    // Only scroll smoothly for anchor links
    if (href.startsWith('/#')) {
      const targetId = href.substring(2) // Remove '/#'
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      } else {
        // If on a different page, navigate to home first then scroll
        window.location.href = '/#' + targetId;
      }
    } else {
      // For direct links like /products, let NextLink handle navigation
      // No scrollIntoView needed here
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200",
      "border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
      "dark:supports-[backdrop-filter]:bg-gray-900/60",
      isScrolled && "shadow-sm",
    )}>
      <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://neuraai.blob.core.windows.net/uploads/neura-black-rectangular.svg"
            alt="Neura Logo"
            width="120"
            height="32"
            className="text-foreground dark:invert"
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                // Only prevent default and scroll for anchor links
                if (item.href.startsWith('/#')) {
                  handleScroll(e, item.href)
                }
                // For direct links like /products, let the Link component handle it
              }}
              className={cn(
                "transition-colors hover:text-foreground/80",
                // Highlight /products if pathname starts with /products
                (pathname === item.href || (item.href === '/products' && pathname.startsWith('/products'))) ? "text-foreground" : "text-foreground/60",
              )}
            >
              {t(item.translationKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  // Only prevent default and scroll for anchor links
                  if (item.href.startsWith('/#')) {
                    handleScroll(e, item.href)
                  } else {
                    // Close mobile menu for direct links
                    setIsMobileMenuOpen(false)
                  }
                }}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  // Highlight /products if pathname starts with /products
                  (pathname === item.href || (item.href === '/products' && pathname.startsWith('/products'))) ? "text-foreground" : "text-foreground/60",
                )}
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}