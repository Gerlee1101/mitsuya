import { cn } from "@/lib/utils"

export default function HomePage() {
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

  const vision =
    "Монгол хүн бүрийн эрүүл, урт удаан амьдралын чанарыг Японы хүнсний соёл, стандартын тусламжтайгаар дэлхийн түвшинд хүргэх."

  const values = [
    {
      title: "People",
      subtitle: "Хүн төвтэй соёл",
      items: [
        "Хэрэглэгчээ дээдлэх: Бид зөвхөн бүтээгдэхүүн нийлүүлэгч биш, таны гэр бүлийн эрүүл мэндийн зөвлөх байна.",
        "Итгэлцэл: Япон чанарыг Монгол айл бүрд чин сэтгэлээсээ, нээлттэйгээр хүргэнэ.",
      ],
    },
    {
      title: "First",
      subtitle: "Чанарыг эрхэмлэн Түрүүлж алхах",
      items: [
        "Стандарт нэгдүгээрт: Бид Япон улсын хүнсний хамгийн хатуу стандартыг хангасан бүтээгдэхүүнийг л сонгодог. Чанарын асуудал дээр бид хэзээ ч буулт хийхгүй.",
        "Шинийг эрэлхийлэгч: Японы хүнсний технологийн дэвшил, шилдэг соёлыг Монголын зах зээлд хамгийн түрүүнд нэвтрүүлнэ.",
      ],
    },
    {
      title: "Health",
      subtitle: "Эрүүл мэндийг эрхэмлэх",
      items: [
        "Урт наслалтын нууц: Бид «Хүнс бол эм» гэсэн зарчмыг баримталж, байгалийн гаралтай, аюулгүй, шим тэжээлтэй хүнсийг түгээнэ.",
        "Эрүүл ирээдүй: Өнөөдрийн зөв хүнс — маргаашийн эрүүл үндэстний баталгаа.",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Бидний тухай - People • First • Health */}
      <section className="bg-white px-4 md:px-8 lg:px-16 py-14 md:py-20 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
            Бидний тухай
          </h2> */}
          <p className="text-2xl md:text-3xl font-semibold text-black dark:text-white text-center mb-2 tracking-wide">
            People <span className="text-sky-500 mx-1">•</span> First{" "}
            <span className="text-sky-500 mx-1">•</span> Health
          </p>
          <p className="text-lg text-black/80 text-center mb-12 leading-relaxed dark:text-white">
            Бидний үйл ажиллагааны цөмд <strong>ХҮН</strong> (People) байдаг. Тийм
            ч учраас бид таны эрүүл мэндийн төлөө хамгийн чанартайг нь{" "}
            <strong>НЭГДҮГЭЭРТ</strong> (First) тавьж, Японы уламжлалт болон
            орчин үеийн <strong>ЭРҮҮЛ</strong> (Health) хүнсний соёлыг таны
            ширээнд авчирна. Бид зөвхөн импортлогч биш, таны эрүүл амьдралын
            хэв маягийн хамтрагч билээ.
          </p>

          <div className="border-t border-sky-200 pt-10 dark:border-white">
            <h3 className="text-xl font-bold text-black mb-3 dark:text-white">Алсын хараа</h3>
            <p className="text-black/80 leading-relaxed dark:text-white">{vision}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-black mb-6 dark:text-white">Үнэт зүйлс</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="border-2 border-sky-200 rounded-xl p-5 bg-sky-50/50 dark:border-white dark:bg-blue-200"
                >
                  <div className="text-sky-600 font-bold text-lg mb-1">
                    {v.title}
                  </div>
                  <div className="text-black/70 text-sm font-medium mb-3">
                    {v.subtitle}
                  </div>
                  <ul className="space-y-2 text-sm text-black/80">
                    {v.items.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-sky-500 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Цагаан хэсэг - Page Header */}
      {/* {<section className="bg-sky-100 px-4 md:px-8 lg:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Products
          </h1>
          <p className="text-lg text-black/70">
            Explore our wide range of high-quality products
          </p>
        </div>

        {/* Category Filter - цагаан дэвсгэр, цэнхэр сонголт */}
        {/* <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-lg border-2 transition-colors",
                category === "All"
                  ? "border-sky-500 bg-white text-black shadow-sm"
                  : "border-sky-200 bg-white/80 text-black hover:border-sky-500 hover:bg-white"
              )}
            >
              {category}
            </button>
          ))}
        </div> */}
      {/* </section>} */}

      {/* Цэнхэр хэсэг - Products Grid */}
      {/* {<section className="bg-sky-100 px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "border-2 border-sky-200 rounded-lg p-6",
                "hover:shadow-lg transition-shadow bg-white",
                "flex flex-col gap-3"
              )}
            >
              {/* Category Badge - цэнхэр */}
              {/* <span className="inline-block w-fit px-3 py-1 bg-sky-100 text-sky-800 text-sm rounded-full border border-sky-200">
                {product.category}
              </span> */}

              {/* Product Info */}
              {/* <h2 className="text-2xl font-semibold text-black">
                {product.name}
              </h2>
              <p className="text-black/70 grow">
                {product.description}
              </p> */}

              {/* Price */}
              {/* <div className="flex items-center justify-between pt-4 border-t border-sky-200">
                <span className="text-3xl font-bold text-black">
                  {product.price}
                </span>
                <button
                  className={cn(
                    "px-4 py-2 bg-black text-white rounded-lg",
                    "hover:bg-black/80 transition-colors font-semibold"
                  )}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>} */} 

      {/* Хар хэсэг - CTA */}
  {/* {<section className="bg-black px-4 md:px-8 lg:px-16 py-12">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Бидэнтэй нэгдээрэй
      </h2>
      <p className="text-white/80 mb-6">
        Шинэ бүтээгдэхүүн, урамшуулалтай танилцаарай.
      </p>
      <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-sky-100 transition-colors border-2 border-white">
        Илүү дэлгэрэнгүй
      </button>
    </div>
  </section>} */}
    </main>
  )
}