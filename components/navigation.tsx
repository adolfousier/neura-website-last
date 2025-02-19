"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/useTranslation"
import { ApplicationsTable } from "./applications-table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Products", href: "#products", translationKey: "Products" },
  { name: "Use Cases", href: "#case-studies", translationKey: "Use Cases" },
  { name: "About Neura", href: "#leadership", translationKey: "About Neura" },
]

export function Navigation() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
<div style={{ height: '100vh', overflow: 'hidden' }}>
<header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: headerRef.current?.offsetHeight,
        }}
      >
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
            {navigation.map((item) =>
              item.name === "Products" ? (
<DropdownMenu key={item.href} open={isProductsOpen} onOpenChange={setIsProductsOpen}>
<DropdownMenuTrigger asChild>
<Button
                      variant="link"
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === item.href ? "text-foreground" : "text-foreground/60",
                      )}
                    >
                      {t(item.translationKey)}
</Button>
</DropdownMenuTrigger>
<DropdownMenuContent align="start" className="w-[400px]">
<ApplicationsTable />
</DropdownMenuContent>
</DropdownMenu>
              ) : (
<Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  {t(item.translationKey)}
</Link>
              ),
            )}
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
</header>

      {isMobileMenuOpen && (
<div className="md:hidden">
<nav className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((item) => (
<Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {t(item.translationKey)}
</Link>
            ))}
</nav>
</div>
      )}
</div>
  )
}