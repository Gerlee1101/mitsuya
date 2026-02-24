"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const RECIPIENT = "business@mitsuya.mn"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = [
      `Нэр: ${name}`,
      `Имэйл: ${email}`,
      "",
      message,
    ].join("\n")
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject || "Холбоо барих")}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-foreground font-medium mb-2">
          Имэйл програм нээгдсэн.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Мессежээ бичиж business@mitsuya.mn руу илгээнэ үү.
        </p>
        <Button
          variant="outline"
          onClick={() => setSent(false)}
        >
          Дахин илгээх
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5"
    >
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Имэйл илгээх
      </h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Нэр <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Нэрээ оруулна уу"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Имэйл <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="имэйл@жишээ.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
          Сэдэв
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Сэдвийг оруулна уу"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Мессеж <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-y min-h-[120px]"
          placeholder="Таны санал, асуулт..."
        />
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Илгээх
      </Button>
    </form>
  )
}
