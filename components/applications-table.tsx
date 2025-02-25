import React, { useState, useEffect, useRef } from "react"
import { TableHeader } from "@/components/ui/table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/hooks/useTranslation"



const applications: Application[] = [
  {
    name: "Neura AI RDA Backend",
    description:
      "All-in-one solution to all LLM models in the market and all the best tools RDA agents, generate and analyse image or document agents, text-to-speech/speech-to-text agents, Telegram, Discord or Whatsapp Agents and more",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Analytics Dashboard",
    description: "AI-powered analysis of hot topics and weekly stats",
    status: "Ready",
    url: "https://dash.meetneura.ai",
  },
  {
    name: "Neura Artifacto UI",
    description:
      "Artifacto is our main chat interface its the ultimate middle layer for the best LLMs! Generate, Analyse, Talk, Translate and more.",
    status: "Ready",
    url: "https://artifacto.meetneura.ai",
  },
  {
    name: "Neura ACE",
    description:
      "Our Autonomous Content Executive is our AI-powered multiple agents working together to automate the content generation and SEO process for the Neura AI Blog.",
    status: "Ready",
    url: "https://ace.meetneura.ai",
  },
  {
    name: "Neura Bookshelf",
    description: "AI agent to generate ebooks and books",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Concise",
    description: "AI-powered Speech to Concise Notes, share any audio file and Neura summarize it concisely.",
    status: "Ready",
    url: "https://t.me/neuraconcisebot",
  },
  {
    name: "Neura Discord",
    description: "AI-powered Discord agent",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Docker & Disk Alerts Monitor",
    description: "Monitor deployments containers and disk alerts",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura ESA",
    description: "AI-powered email sales auto-replier or auto-drafter agents",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura FAQ Nova",
    description: "AI-powered FAQs generation from website data",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Google Maps PRO",
    description: "AI-powered scrape and collect insightful data from Google Maps to a sheet document",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Insight Forge",
    description: "AI-powered agent to scrape websites and documents to markdown format",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura MGD",
    description:
      "Our Markdown to Google Docs free tool! Automatic grammar fix, write and concert in real time and download .docx file:",
    status: "Ready",
    url: "https://mgd.meetneura.ai",
  },
  {
    name: "Neura MAD",
    description: "Our own micro app dev agent",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura RTS",
    description: "AI-powered search engine agent",
    status: "Ready",
    url: "https://rts.meetneura.ai",
  },
  {
    name: "Neura MSN",
    description:
      "AI-powered Memecoins Sniper Agent, have full access to real time data from the blokchain, powered by Neura Widgets",
    status: "Ready",
    url: "https://meme-sniper.meetneura.ai",
  },
  {
    name: "Neura TG Oracle",
    description: "AI-powered Telegram agent",
    status: "Ready",
    url: "https://t.me/meetneuraaibot",
  },
  {
    name: "Neura TKN",
    description:
      "Our free tokenizer tool, show the token count with visual efffects to understand how tokens are counted, word and character count.",
    status: "Ready",
    url: "https://tkn.meetneura.ai",
  },
  {
    name: "Neura TSB",
    description: "AI-powered agent to compress and convert audio recordings into comprehensive meeting notes",
    status: "Ready",
    url: "https://tsb.meetneura.ai",
  },
  {
    name: "Neura Trello Oracle",
    description: "AI-powered trello backend agent",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura WA Oracle",
    description: "AI-powered WhatsApp backend agent",
    status: "Ready",
    url: "https://meetneura.ai",
  },
  {
    name: "Neura Wiz",
    description: "AI-powered UI/UX designer, talk to Neura WIZ and see the magic happening",
    status: "Ready",
    url: "https://uiwiz.meetneura.ai",
  },
  {
    name: "Neura Web",
    description: "AI-powered website customer support agent",
    status: "Ready",
    url: "https://meetneura.ai",
  },
]

export function ApplicationsTable() {
  const { t } = useTranslation()
  const [hoveredApp, setHoveredApp] = useState<Application | null>(null)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })
  const previewTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current)
      }
    }
  }, [])

  const handleRowMouseEnter = (e: React.MouseEvent<HTMLTableRowElement>, app: Application) => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current)
    }

    const row = e.currentTarget
    const rect = row.getBoundingClientRect()
    
    const x = rect.left + window.scrollX
    const y = rect.top + window.scrollY

    previewTimeoutRef.current = setTimeout(() => {
      setPreviewPosition({ x, y })
      setHoveredApp(app)
    }, 100)
  }

  const handleRowMouseLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current)
    }

    const relatedTarget = e.relatedTarget as Node | null
    if (previewRef.current && !previewRef.current.contains(relatedTarget)) {
      setHoveredApp(null)
    }
  }

  const handlePreviewMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as Element | null
    if (!relatedTarget?.closest('tr')) {
      setHoveredApp(null)
    }
  }

  const handleRowClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative">
      <div className="border rounded-2xl overflow-hidden shadow-sm relative scale-90">
        <div className="overflow-y-auto max-h-[600px] applications-scrollbar">
          <Table>
            <TableHeader className="bg-primary sticky top-0 z-10">
              <TableRow>
                <TableHead className="text-primary-foreground p-3">{t("Application")}</TableHead>
                <TableHead className="text-primary-foreground p-3">{t("Description")}</TableHead>
                <TableHead className="text-primary-foreground p-3 w-[100px]">{t("Status")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(app.url)}
                  className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                    index % 2 === 0 ? "bg-muted/10" : ""
                  }`}
                  onMouseEnter={(e) => handleRowMouseEnter(e, app)}
                  onMouseLeave={handleRowMouseLeave}
                >
                  <TableCell className="font-medium p-3">
                    <span className="text-primary hover:text-primary/80 hover:underline transition-colors">
                      {t(app.name)}
                    </span>
                  </TableCell>
                  <TableCell className="p-3">{t(app.description)}</TableCell>
                  <TableCell className="p-3">
                    <Badge
                      variant={app.status === "Ready" ? "default" : "secondary"}
                      className="rounded-full"
                    >
                      {t(app.status)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </div>

      {hoveredApp && (
        <div
          ref={previewRef}
          className="fixed z-50 w-80 bg-white dark:bg-gray-900 border rounded-lg shadow-lg p-2 transition-opacity duration-200"
          style={{
            top: `${previewPosition.y - 200}px`,
            left: `${previewPosition.x + 20}px`,
          }}
          onMouseLeave={handlePreviewMouseLeave}
        >
          <div className="w-full h-48 bg-muted/10 rounded-md overflow-hidden">
            <img
              src={`https://api.microlink.io?url=${encodeURIComponent(hoveredApp.url)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={`Preview of ${hoveredApp.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-sm font-medium text-center">{hoveredApp.name}</p>
        </div>
      )}
    </div>
  )
}