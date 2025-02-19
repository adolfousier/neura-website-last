"use client"

import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

export function About() {
  const { t } = useTranslation()

  return (
    <div id="leadership" className="w-full max-w-[1400px] mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{t("Leadership")}</h2>

      <div className="grid gap-8 md:grid-cols-3 items-start">
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://neuraai.blob.core.windows.net/uploads/pfpp2.jpeg"
              alt="Adolfo Usier"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Adolfo Usier</h1>
          <p className="text-lg text-muted-foreground">{t("Neura Founder, CEO, and CPO")}</p>

          <div>
            <h2 className="text-xl font-semibold">{t("Venture Accelerator")}</h2>
            <p className="text-muted-foreground">
              {t(
                "With over 20 years of experience in building ground-up businesses, Adolfo has a proven track record of turning ideas into thriving enterprises. As an 8x startup founder, he brings unparalleled expertise in scaling companies from zero to success.",
              )}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">{t("Full Stack / Computer Scientist")}</h2>
            <p className="text-muted-foreground">
              {t(
                "A seasoned technologist, Adolfo combines deep technical knowledge with visionary leadership. His ability to bridge the gap between engineering and business strategy has been a cornerstone of Neura's innovation.",
              )}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">{t("Superpowers")}</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>{t("Leadership: Inspiring teams to achieve the extraordinary.")}</li>
              <li>{t("Problem Solving: Tackling complex challenges with creative solutions.")}</li>
              <li>{t("Adaptability: Thriving in dynamic, fast-paced environments.")}</li>
              <li>{t("AI & Product Innovation: Pioneering cutting-edge technologies that redefine industries.")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

