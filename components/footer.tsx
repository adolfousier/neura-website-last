"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Footer() {
  const { t } = useTranslation()

  useEffect(() => {
    // Initialize MailerLite script
    const script = document.createElement('script')
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '787317');
    `
    document.head.appendChild(script)
  }, [])


  return (
    <footer className="border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img
              src="https://neuraai.blob.core.windows.net/uploads/neura-black-rectangular.svg"
              alt="Neura Logo"
              width="120"
              height="32"
              className="text-foreground dark:invert"
            />
            <p className="text-sm text-muted-foreground">
              {t(
                "Deploy 20+ specialized AI agents to handle sales, support, analytics, and more. Join leaders saving 100+ hours weekly and scaling like never before.",
              )}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("Links")}</h3>
            <ul className="space-y-2 text-sm">
              {[t("Docs"), t("Blog"), t("About Neura"), t("Use Cases"), t("FAQ")].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("Legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  {t("Terms of Service")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  {t("Privacy Policy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("Newsletter")}</h3>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder={t("Enter your email")} 
                required
              />
              <Button type="submit" className="w-full">{t("Get onboard!")}</Button>
            </form>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          NEURA AI Technologies {new Date().getFullYear()} © {t("All rights reserved")}
        </div>
      </div>
    </footer>
  )
}

