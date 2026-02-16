import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export const Footer = () => {
  const navItems = [
    { label: "Нүүр", href: "/" },
    { label: "Салбарууд", href: "/chain-store" },
    { label: "Бүтээгдэхүүн", href: "/products" },
    { label: "Холбоо барих", href: "/contact" },
  ]

  return (
    <footer className="w-full border-t border-amber-300 bg-[#0066B3] mt-auto">
      <div className="px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo-white.png" alt="Logo" className="w-32 md:w-40" />
            </Link>
            <p className="text-sm text-muted-foreground">
              People • First • Health 
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Холбоос</h3>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground",
                    "transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Холбоо барих</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>+976 77419090</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-foreground transition-colors"
                >
                  business@mitsuya.mn
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p>Улаанбаатар хот</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Сошиал сүлжээ</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Mitsuya.Mongolia"
                className="w-10 h-10 rounded-full bg-muted hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
