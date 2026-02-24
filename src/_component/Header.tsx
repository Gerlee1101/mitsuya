"use client"

import { useState } from "react"
import Link from "next/link"
import { Barcode, Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

export const Header = () => {
// const router=useRouter();
// const pathname=usePathname();
// const isMenu=pathname.startsWith("/");
// const 
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chain store", href: "/chain-store" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className={cn(
      "w-full  bg-background opacity-85",
      "fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
    )}>
      <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="w-32 md:w-40 shrink-0">
          <img src="/Logo.png" alt="logoMovie" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-foreground hover:text-blue-600 dark:hover:text-blue-400",
                "transition-colors"
              )}
            >
              {item.label}
            </Link>
          ))}
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-blue-600 dark:hover:text-blue-400",
                  "transition-colors block py-2"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
        </nav>
      )}
    </div>
  )
}