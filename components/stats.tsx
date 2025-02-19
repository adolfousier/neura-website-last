"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

const stats = [
  {
    title: "More efficient conversations",
    value: "2X",
  },
  {
    title: "Increased customer satisfaction",
    value: "500%",
  },
  {
    title: "Better conversions",
    value: "3X",
  },
]

export function Stats() {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("Neura AI Agents: Where Leads Become Loyalty")}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-4xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{t(stat.title)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

