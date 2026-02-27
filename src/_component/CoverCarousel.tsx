"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/cover-carousel/zurag.jpg",
  "/cover-carousel/zurag2.jpg",
  "/cover-carousel/zurag3.jpg",
]

export function CoverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => setCurrentIndex(index)
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)

  return (
    <div className="relative w-full overflow-hidden">
      <h4 className="text-8xl font-bold text-center mt-5 top-5 left-15 absolute text-white z-50">MITSUYA</h4>
      <h4 className="text-4xl font-bold italic text-center mt-5 bottom-10 right-15 absolute text-white z-50">Nippon Store</h4> 
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="mt-5 relative w-full shrink-0 aspect-9/2 min-h-50 md:min-h-70">
            <Image
              src={src}
              alt={`Cover ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentIndex
                ? "bg-blue-500 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
