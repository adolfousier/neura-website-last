"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

const testimonials = [
  {
    name: "Raul Marques",
    handle: "@diasporalusapt",
    content:
      "Neura AI Web Agent is more than just a technological innovation – it's a bridge that strengthens the bonds between Portugal and its citizens worldwide @meetneuraai",
    avatar: "/comments/01.png",
  },
  {
    name: "António Delgado",
    handle: "@legacisadvogados",
    content:
      "Neura AI Web Agent is saving time and providing immediate responses to our clients. It brings prestige to our lawyer office and shows our clients that we are on top of the innovation @meetneuraai.",
    avatar: "/comments/08.png",
  },
  {
    name: "Sergey Klinkov",
    handle: "@finerymarkets",
    content:
      "Neura ES Auto-Replier Agent is a real help! Helped a lot in our automated sales, especially with the cold leads! Can't wait to see what comes next @meetneuraai",
    avatar: "/comments/05.jpg",
  },
  {
    name: "Gaspare Russo",
    handle: "@cannesserrurier",
    content:
      "I highly recommend Neura AI for their professional, AI-driven approach and exceptional ability to create a personalized, high-performing website that perfectly meets client needs.",
    avatar: "/comments/02.png",
  },
  {
    name: "Egor Mozorow",
    handle: "@finerymarkets",
    content:
      "Literally saved our lives when handling new clients. The team is delighted with the services over the last 7 months with @meetneuraai.",
    avatar: "/comments/04.jpg",
  },
  {
    name: "Roman Gall",
    handle: "@rmngall",
    content:
      "Neura Concise Agent is such a hack. I can stick to my preferred communication style and she transcribe all voice recordings concisely, no more hastle listening to endless audio files. Well done @meetneuraai",
    avatar: "/comments/06.png",
  },
]

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-[1400px] mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("What our clients say")}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{t(testimonial.content)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

