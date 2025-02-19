"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

const caseStudies = [
  {
    title: "Finery Markets",
    description:
      "A leading SaaS financial trading provider with $20B+ in transactions streamlined customer support requests during onboarding.",
    stats: [
      { label: "Time saved per customer", value: "30+h" },
      { label: "Accuracy", value: "95%" },
    ],
    image: "https://neuraai.blob.core.windows.net/uploads/fineryxneura-thumb.png?height=200&width=400",
    url: "https://blog.meetneura.ai/case-study-finerymarkets-com/",
  },
  {
    title: "Legacis: Case Study: Legacis.eu Embracing Innovation in Legal Services",
    description:
      "Legacis.eu implemented Neura AI Assistant as an innovative solution to enhance their client service capabilities. ",
    stats: [
      { label: "User interactions in 7 days", value: "160+" },
      { label: "Availability", value: "24/7" },
    ],
    image: "https://neuraai.blob.core.windows.net/uploads/legacisxneura-thumb.png?height=200&width=400",
    url: "https://blog.meetneura.ai/case-study-legacis-eu/",
  },
  {
    title: "Amália: Revolutionizing Portuguese Communities Worldwide",
    description:
      "Diáspora Lusa and Neura AI launched Amália, an AI agent empowering the Portuguese diaspora with rapid, accurate information and essential services.",
    stats: [
      { label: "User interactions in 7 days", value: "160+" },
      { label: "Availability", value: "24/7" },
    ],
    image: "https://neuraai.blob.core.windows.net/uploads/diasporalusaxneuraai.png",
    url: "https://blog.meetneura.ai/case-study-diaspora-lusa-ai-agent/",
  },
  {
    title: "Serrurier Cannes: Unlocking Success",
    description:
      "Neura Technologies helped Serrurier Cannes boost their online presence and drive business growth with AI-powered solutions.",
    stats: [
      { label: "New clients with 5-star reviews", value: "3" },
      { label: "Google Maps interactions", value: "55" },
    ],
    image: "https://neuraai.blob.core.windows.net/uploads/neura_x_serrurier_low.png",
    url: "https://blog.meetneura.ai/case-study-serrurier-cannes-ai-agent/",
  },
]

export function CaseStudies() {
  const { t } = useTranslation()

  return (
<section id="case-studies" className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
<div className="container">
<div className="grid gap-6">
<div className="text-center space-y-4">
<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("Case studies")}
</h2>
<p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              {t("See how Neura AI has helped businesses achieve remarkable results.")}
</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((study, index) => (
<Card key={index} className="flex flex-col">
<CardHeader className="p-4">
<Image
                    src={study.image || "/placeholder.svg"}
                    alt={t(study.title)}
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full h-auto"
                  />
</CardHeader>
<CardContent className="flex-grow p-4">
<CardTitle className="mb-2 text-lg">{t(study.title)}
</CardTitle>
<CardDescription className="text-sm">{t(study.description)}
</CardDescription>
<div className="mt-4 space-y-2">
                    {study.stats.map((stat, statIndex) => (
<div key={statIndex} className="flex justify-between">
<span className="text-sm text-muted-foreground">{t(stat.label)}
</span>
<span className="font-bold text-sm">{stat.value}
</span>
</div>
                    ))}
</div>
</CardContent>
<CardFooter className="p-4">
<Button 
                    variant="outline" 
                    className="w-full text-sm"
                    onClick={() => window.location.href = study.url}
                  >
                    {t("Read full case study")}
</Button>
</CardFooter>
</Card>
            ))}
</div>
</div>
</div>
</section>
  )
}