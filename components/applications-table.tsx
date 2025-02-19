import { TableHeader } from "@/components/ui/table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/hooks/useTranslation"

const applications = [
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

  return (
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
                className={`hover:bg-muted/50 transition-colors ${index % 2 === 0 ? "bg-muted/10" : ""}`}
              >
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="contents group relative">
                  <TableCell className="font-medium p-3">{t(app.name)}</TableCell>
                  <TableCell className="p-3">{t(app.description)}</TableCell>
                  <TableCell className="p-3">
                    <a href={app.url} target="_blank" rel="noopener noreferrer" className="group relative block">
                      <Badge
                        variant={app.status === "Ready" ? "default" : "secondary"}
                        className="rounded-full cursor-pointer"
                      >
                        {t(app.status)}
                      </Badge>
                      <div className="absolute z-10 w-64 p-2 bg-white border rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                        <img
                          src={`https://api.microlink.io?url=${encodeURIComponent(app.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                          alt={`Preview of ${app.name}`}
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </a>
                  </TableCell>
                </a>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </div>
  )
}

