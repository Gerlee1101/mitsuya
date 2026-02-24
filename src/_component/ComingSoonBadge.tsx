"use client"

import { useEffect, useState } from "react"

type Position = {
  top: number
  left: number
}

export function ComingSoonBadge() {
  const [position, setPosition] = useState<Position>({ top: 20, left: 60 })
  const [colorClass, setColorClass] = useState<string>("bg-black/80 text-white")

  const colors = [
    "bg-black/80 text-white",
    "bg-blue-600 text-white",
    "bg-sky-500 text-black",
    "bg-amber-400 text-black",
    "bg-emerald-500 text-white",
    "bg-pink-500 text-white",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: 5 + Math.random() * 90, // 5–95%
        left: 5 + Math.random() * 90, // 5–95%
      })
      const idx = Math.floor(Math.random() * colors.length)
      setColorClass(colors[idx])
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="pointer-events-none fixed md:absolute z-40 animate-pulse transition-all duration-700 ease-out"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm md:text-base font-semibold shadow-lg ${colorClass}`}
      >
        Coming soon...
      </span>
    </div>
  )
}

