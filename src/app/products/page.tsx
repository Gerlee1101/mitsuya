import { cn } from "@/lib/utils"

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
    <main className="min-h-screen bg-background">
      <div className="px-4 md:px-8 lg:px-16 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of high-quality products
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-lg border-2 transition-colors",
                category === "All"
                  ? "border-amber-300 bg-amber-100 text-foreground dark:bg-amber-900"
                  : "border-gray-300 bg-background hover:border-amber-300 text-muted-foreground hover:text-foreground dark:border-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "border border-amber-300 rounded-lg p-6",
                "hover:shadow-lg transition-shadow bg-card",
                "flex flex-col gap-3"
              )}
            >
              {/* Category Badge */}
              <span className="inline-block w-fit px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-sm rounded-full">
                {product.category}
              </span>

              {/* Product Info */}
              <h2 className="text-2xl font-semibold text-foreground">
                {product.name}
              </h2>
              <p className="text-muted-foreground grow">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-3xl font-bold text-foreground">
                  {product.price}
                </span>
                <button
                  className={cn(
                    "px-4 py-2 bg-blue-600 text-white rounded-lg",
                    "hover:bg-blue-700 dark:hover:bg-blue-500",
                    "transition-colors font-semibold"
                  )}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}