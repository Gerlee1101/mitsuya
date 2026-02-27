"use client"

import { useState } from "react"
import Link from "next/link"
import { Barcode, Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "./LanguageProvider"

export const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const { lang, setLang, toggleLang } = useLanguage()

  const navItems =
    lang === "ja"
      ? [
          { label: "ホーム", href: "/" },
          { label: "チェーン店", href: "/chain-store" },
          { label: "商品", href: "/products" },
          { label: "レシピ", href: "/recipes" },
          { label: "お問い合わせ", href: "/contact" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Chain store", href: "/chain-store" },
          { label: "Products", href: "/products" },
          { label: "Recipes", href: "/recipes" },
          { label: "Contact", href: "/contact" },
        ]

  return (
    <div className={cn(
      "w-full  bg-blue-700 opacity-85",
      "fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
    )}>
      <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="w-32 md:w-40 shrink-0">
          <img src="/logo-white.png" alt="logoMovie" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "text-red-500"
                    : "text-white hover:text-blue-400 dark:hover:text-blue-400"
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="w-12 flex justify-center items-center bg-red-500 rounded-md">
          <Button
            variant="link"
            className={cn(
              "no-underline hover:no-underline cursor-pointer",
              "text-foreground hover:text-white dark:hover:text-blue-400",
              "transition-colors"
            )}
          >
            <Barcode className="w-5 h-5" />
          </Button></div>
        </nav>

        {/* Right side: Mode toggle + Mobile menu button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center text-xs rounded-full bg-blue-800/70 px-2 py-1 border border-blue-500/60">
            <button
              onClick={() => setLang("mn")}
              className={cn(
                "px-1.5 transition-colors",
                lang === "mn" ? "text-white font-semibold" : "text-blue-200"
              )}
            >
              MN
            </button>
            <span className="text-blue-300 mx-0.5">/</span>
            <button
              onClick={() => setLang("ja")}
              className={cn(
                "px-1.5 transition-colors",
                lang === "ja" ? "text-white font-semibold" : "text-blue-200"
              )}
            >
              JP
            </button>
          </div>
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-amber-300 bg-background">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors block py-2",
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-foreground hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className=" bg-red-500 rounded-md">
            <Button
              variant="link"
              className={cn(
                "no-underline hover:no-underline cursor-pointer justify-start",
                "text-foreground hover:text-white  dark:hover:text-blue-400",
                "transition-colors",
                "gap-2"
              )}
            >
              <Barcode className="w-5 h-5" />
              Barcode
            </Button></div>
          </div>
          {/* Mobile language toggle */}
          <div className="flex items-center justify-end gap-1 pt-2 text-xs">
            <button
              onClick={() => setLang("mn")}
              className={cn(
                "px-1.5 rounded-full transition-colors",
                lang === "mn"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 dark:text-blue-300"
              )}
            >
              MN
            </button>
            <span className="text-blue-500">/</span>
            <button
              onClick={() => setLang("ja")}
              className={cn(
                "px-1.5 rounded-full transition-colors",
                lang === "ja"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 dark:text-blue-300"
              )}
            >
              JP
            </button>
          </div>
        </nav>
      )}
    </div>
  )
}