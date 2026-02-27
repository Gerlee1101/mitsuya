 "use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { ContactForm } from "@/_component/ContactForm"
import { useLanguage } from "@/_component/LanguageProvider"

const MAP_LINK = "https://maps.app.goo.gl/NnegC2fwUQmLmrvR7"
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5346.4117598872635!2d106.91335305500291!3d47.932401188205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692646cc5dc31%3A0x8abaeac973d65b2f!2z0KXQvtC50LzQvtGAINC-0YTRhNC40YE!5e0!3m2!1sen!2smn!4v1771914521187!5m2!1sen!2smn"

export default function ContactPage() {
  const { lang } = useLanguage()
  const isJa = lang === "ja"

  return (
    <main className="min-h-screen bg-background">
      <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 mt-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isJa ? "お問い合わせ" : "Холбоо барих"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isJa
              ? "ご質問やご相談などがございましたら、こちらからお気軽にお問い合わせください。"
              : "Та санал, асуултаа үлдээж болно. Бид тантай холбогдохоор бэлтгэж байна."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              {isJa ? "連絡先情報" : "Бидэнтэй холбогдох"}
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-300 dark:bg-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-700 dark:text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {isJa ? "電話" : "Утас"}
                </p>
                <a
                  href="tel:+97677419090"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +976 77419090
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-300 dark:bg-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5  text-blue-700 dark:text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {isJa ? "メール" : "Имэйл"}
                </p>
                <a
                  href="mailto:business@mitsuya.mn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  business@mitsuya.mn
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-300 dark:bg-blue-600 0 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-700 dark:text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {isJa ? "住所" : "Хаяг"}
                </p>
                <a
                  href="https://maps.app.goo.gl/dvRCDxJhmSLZ6EJd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  Хоймор оффис 12 давхар, 1209 тоот, 9-р хороо, Сүхбаатар дүүрэг, Улаанбаатар, Монгол улс
                </a>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  — Газрын зураг
                </span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/Mitsuya.Mongolia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-500 hover:text-foreground " />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500 hover:text-foreground " />
              </a>
            </div>
          </div>

          {/* Газрын зураг - Google Map embed */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Газрын зураг - Хоймор оффис, Сүхбаатар дүүрэг"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-foreground bg-muted/50 hover:bg-muted transition-colors"
            >
              <MapPin className="w-4 h-4" />
              {isJa ? "Googleマップで開く" : "Google Maps дээр нээх"}
            </a>
          </div>
        </div>

        {/* Имэйл бичих хэсэг */}
        {/* {<div className="max-w-4xl mx-auto mt-14">
          <ContactForm />
        </div>} */}

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            {isJa
              ? "People • First • Health — あなたの健康的なライフスタイルパートナー。"
              : "People • First • Health — Таны эрүүл амьдралын хамтрагч."}
          </p>
        </div>
      </div>
    </main>
  )
}
