"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("Train your AI Agents, Together!")}
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-lg">
            {t(
              "Deploy 20+ specialized AI agents to handle sales, support, analytics, and more—crafted side by side with our experts for a seamless, tailored experience. Join industry leaders saving 100+ hours weekly and scaling like never before.",
            )}
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                window.open(
                  "https://wa.me/+351933536442?text=Hi%20Adolfo.%20I%20am%20interested%20to%20book%20a%20call",
                  "_blank",
                )
              }
            >
              {t("Get a 7 days free trial")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

