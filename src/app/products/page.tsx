import { cn } from "@/lib/utils"
import { ComingSoonBadge } from "@/_component/ComingSoonBadge"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Premium Product A",
      description: "High-quality product with excellent features",
      price: "$49.99",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Deluxe Product B",
      description: "Best-selling product loved by customers",
      price: "$79.99",
      category: "Accessories",
    },
    {
      id: 3,
      name: "Standard Product C",
      description: "Affordable and reliable everyday product",
      price: "$29.99",
      category: "Basics",
    },
    {
      id: 4,
      name: "Professional Product D",
      description: "Designed for professional use and durability",
      price: "$129.99",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Compact Product E",
      description: "Portable and lightweight for on-the-go",
      price: "$39.99",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Ultimate Product F",
      description: "Premium features with cutting-edge technology",
      price: "$199.99",
      category: "Electronics",
    },
  ]

  const categories = ["All", "Electronics", "Accessories", "Basics"]

  return (
    <main className="min-h-screen bg-background relative flex items-center justify-center">
     
      <ComingSoonBadge />
    </main>
  )
}