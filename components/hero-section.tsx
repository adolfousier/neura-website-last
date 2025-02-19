"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ApplicationsTable } from "./applications-table"
import { useTranslation } from "@/hooks/useTranslation"

export function HeroSection() {
  const { t } = useTranslation()

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
            <div className="flex w-full max-w-sm items-center space-x-2 mx-auto lg:mx-0">
              <Input type="email" placeholder={t("Enter your email address")} />
              <Button type="submit">{t("Get Started")}</Button>
            </div>
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

