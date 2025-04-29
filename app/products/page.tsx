"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"
import { Navigation } from "@/components/navigation"


interface Application {
  name: string
  description: string
  status: string
  url: string
}

const applications: Application[] = [
  { name: "Neura AI Router Backend", description: "All-in-one solution to all LLM models in the market and all the best tools RDA agents, generate and analyse image or document agents, text-to-speech/speech-to-text agents, Telegram, Discord or Whatsapp Agents and more", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura Analytics Dashboard", description: "AI-powered analysis of hot topics and weekly stats", status: "Ready", url: "https://dash.meetneura.ai" },
  { name: "Neura Artifacto UI", description: "Artifacto is our main chat interface its the ultimate middle layer for the best LLMs! Generate, Analyse, Talk, Translate and more.", status: "Ready", url: "https://artifacto.meetneura.ai" },
  { name: "Neura ACE", description: "Our Autonomous Content Executive is our AI-powered multiple agents working together to automate the content generation and SEO process for the Neura AI Blog.", status: "Ready", url: "https://ace.meetneura.ai" },
  { name: "Neura Bookshelf", description: "AI agent to generate ebooks and books", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura Brand Insider 247", description: "Comprehensive brand monitoring and analysis platform. Aggregates data from 100M+ sources, tracks mentions, analyzes sentiment, and provides AI-driven insights and recommendations for your brand.", status: "Ready", url: "https://brand-insider.meetneura.ai" },
  { name: "Neura Concise", description: "AI-powered Speech to Concise Notes, share any audio file and Neura summarize it concisely.", status: "Ready", url: "https://t.me/neuraconcisebot" },
  { name: "Neura Discord", description: "AI-powered Discord agent", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura Docker & Disk Alerts Monitor", description: "Monitor deployments containers and disk alerts", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura ESA", description: "AI-powered email sales auto-replier or auto-drafter agents", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura FAQ Nova", description: "AI-powered FAQs generation from website data", status: "Ready", url: "https://smart-data-scraper.meetneura.ai" },
  { name: "Neura Google Maps PRO", description: "AI-powered scrape and collect insightful data from Google Maps to a sheet document", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura Insight Forge", description: "A powerful website scraper and documents to, raw, clear text and markdown format", status: "Ready", url: "https://if.meetneura.ai" },
  { name: "Neura MGD", description: "Our Markdown to Google Docs free tool! Automatic grammar fix, write and convert in real time and download .docx file", status: "Ready", url: "https://mgd.meetneura.ai" },
  { name: "Neura MAD", description: "Our own micro app dev agent", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura RTS", description: "AI-powered search engine agent", status: "Ready", url: "https://rts.meetneura.ai" },
  { name: "Neura MSN", description: "AI-powered Memecoins Sniper Agent, have full access to real time data from the blockchain, powered by Neura Widgets", status: "Ready", url: "https://meme-sniper.meetneura.ai" },
  { name: "Neura TG Oracle", description: "AI-powered Telegram agent", status: "Ready", url: "https://t.me/meetneuraaibot" },
  { name: "Neura TKN", description: "Our free tokenizer tool, show the token count with visual effects to understand how tokens are counted, word and character count", status: "Ready", url: "https://tokenizer.meetneura.ai" },
  { name: "Neura TSB", description: "AI-powered agent to compress and convert audio recordings into comprehensive meeting notes", status: "Ready", url: "https://tsb.meetneura.ai" },
  { name: "Neura Trello Oracle", description: "AI-powered Trello backend agent", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura WA Oracle", description: "AI-powered WhatsApp backend agent", status: "Ready", url: "https://meetneura.ai" },
  { name: "Neura Wiz", description: "AI-powered UI/UX designer, talk to Neura WIZ and see the magic happening", status: "Ready", url: "https://uiwiz.meetneura.ai" },
  { name: "Neura Web", description: "AI-powered website customer support agent", status: "Ready", url: "https://meetneura.ai" }
]

const categories = [
  {
    title: "Communication & Collaboration",
    filter: [
      "Neura Artifacto UI",
      "Neura Discord",
      "Neura TG Oracle",
      "Neura Trello Oracle",
      "Neura WA Oracle"
    ]
  },
  {
    title: "Data & Analytics",
    filter: [
      "Neura Analytics Dashboard",
      "Neura Brand Insider 247",
      "Neura Insight Forge",
      "Neura MSN",
      "Neura Google Maps PRO",
      "Neura RTS"
    ]
  },
  {
    title: "Content & Generation",
    filter: [
      "Neura ACE",
      "Neura Bookshelf",
      "Neura FAQ Nova",
      "Neura Concise",
      "Neura TSB",
      "Neura MGD",
      "Neura TKN",
      "Neura Wiz"
    ]
  },
  {
    title: "Dev & Operations",
    filter: [
      "Neura AI Router Backend",
      "Neura MAD",
      "Neura Docker & Disk Alerts Monitor",
      "Neura ESA",
      "Neura Web"
    ]
  }
]


export default function ProductsPage() {
  const { t } = useTranslation()
  const handleCardClick = (url: string) => window.open(url, '_blank', 'noopener,noreferrer')

  return (
    <>
      <Navigation />
      <section className="w-full max-w-[1400px] mx-auto mt-16 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("Our Products")}</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">{t("Explore the suite of AI-powered applications designed by Neura AI.")}</p>
        </div>

        {categories.map((category) => (
          <div key={category.title} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t(category.title)}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {applications.filter((app) => category.filter.includes(app.name)).map((app, idx) => (
                <Card
                  key={`${category.title}-${idx}`}
                  className="flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300 border-2"
                  onClick={() => handleCardClick(app.url)}
                >
                  <CardHeader className="p-0">
                    <div className="w-full aspect-video bg-muted/10 overflow-hidden relative">
                      <Image
                        src={`https://api.microlink.io?url=${encodeURIComponent(app.url)}&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&overlay.background=transparent`}
                        alt={t(app.name)}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        style={{ objectFit: 'contain' }}
                        className="transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 flex flex-col">
                    <CardTitle className="mb-2 text-lg">{t(app.name)}</CardTitle>
                    <CardDescription className="text-sm flex-grow">{t(app.description)}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
