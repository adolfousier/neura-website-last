"use client"

import { Calendar, Image, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

const features = [
  {
    title: "Handle FAQs",
    description: "Handle any questions with Neura Web, our website customer support AI Agent.",
    icon: MessageSquare,
    bullets: [
      "24/7 automated responses",
      "Multi-language support",
      "Custom knowledge base"
    ]
  },
  {
    title: "Generate autonomous content",
    description: "Generate weekly digest or daily blog posts Neura ACE, our Autonomous Content Executive to deep research, improve your SEO and keep posting content regularly.",
    icon: Calendar,
    bullets: [
      "Generate Auto Daily Content",
      "Craft Weekly Digest",
      "Execute Daily Research"
    ]
  },
  {
    title: "Brand monitoring & AI insights",
    description: "Track your brand mentions across 100M+ sources, analyze sentiment, and get actionable AI-powered recommendations with Neura Brand Insider 247.",
    icon: Calendar,
    bullets: [
      "Comprehensive dashboard overview",
      "Real-time mention tracking",
      "AI-powered sentiment analysis"
    ]
  },
  {
    title: "Engage through voice and imagery",
    description:
      "Level-up your task management with Neura WhatsApp, Trello, or Calendar with our multi-platform integrations.",
    icon: Image,
    bullets: [
      "Voice interaction",
      "Image recognition",
      "Multi-modal support"
    ]
  },
]

export function Features() {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("Your ultimate AI agent bundle")}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            {t("Finally, an AI brand that empowers your whole organization—smarter, faster, and built for growth.")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{t(feature.title)}</CardTitle>
                <CardDescription className="pt-2">{t(feature.description)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  {feature.bullets && feature.bullets.map((bullet, i) => (
                    <p key={i}>{t(`• ${bullet}`)}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">30+</CardTitle>
              <CardDescription className="text-primary-foreground/80">{t("Integrations")}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">50+</CardTitle>
              <CardDescription>{t("Languages Supported")}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">24/7</CardTitle>
              <CardDescription>{t("Availability")}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">500%</CardTitle>
              <CardDescription>{t("Increased Satisfaction")}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

