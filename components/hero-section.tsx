"use client"

import { Button } from "@/components/ui/button"
import { ApplicationsTable } from "./applications-table"
import { useTranslation } from "@/hooks/useTranslation"
import { useEffect } from "react"

export function HeroSection() {
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
    <section className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="pt-24"> 
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left lg:w-1/2 px-4 sm:px-6 lg:px-0">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("Your Entire Business AI-Powered")}
            </h1>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-muted-foreground text-lg sm:text-xl md:text-2xl">
              {t(
                "Boost your entire business with 20+ specialized AI agents that handles everything from sales and support to analytics, autonomous agents and automation. Join industry leaders already saving 100+ hours per week.",
              )}
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <form className="flex w-full max-w-sm items-center space-x-2 mx-auto lg:mx-0">
              <input
                type="email"
                placeholder={t("Enter your email")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="shrink-0">
                {t("Subscribe")}
              </Button>
            </form>
            <Button
              variant="outline"
              className="w-full max-w-sm mx-auto lg:mx-0"
              onClick={() =>
                window.open(
                  "https://wa.me/+351933536442?text=Hi%20Adolfo.%20I%20am%20interested%20to%20book%20a%20call",
                  "_blank",
                )
              }
            >
              {t("Request a free trial")}
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="max-h-[600px]">
            <ApplicationsTable />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

