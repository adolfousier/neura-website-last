"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Footer() {
  const { t } = useTranslation()

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
            <div className="space-y-2">
              <Input type="email" placeholder={t("Enter your email")} />
              <Button className="w-full">{t("Get onboard!")}</Button>
            </div>
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

