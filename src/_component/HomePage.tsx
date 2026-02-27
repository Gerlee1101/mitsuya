 "use client"

import { useLanguage } from "./LanguageProvider"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const { lang } = useLanguage()
  const isJa = lang === "ja"

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

  const visionMn =
    "Монгол хүн бүрийн эрүүл, урт удаан амьдралын чанарыг Японы хүнсний соёл, стандартын тусламжтайгаар дэлхийн түвшинд хүргэх."

  const visionJa =
    "日本の食品文化と品質基準を通じて、モンゴルの人々一人ひとりの健康で豊かな生活の質を世界水準へ引き上げること。"

  const valuesMn = [
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

  const valuesJa = [
    {
      title: "People",
      subtitle: "人を中心にした文化",
      items: [
        "お客様第一主義：私たちは単なる商品供給者ではなく、ご家庭の健康パートナーでありたいと考えています。",
        "信頼：日本品質をモンゴルのご家庭一つひとつに、誠実かつ透明性を持ってお届けします。",
      ],
    },
    {
      title: "First",
      subtitle: "品質を最優先し、一歩先へ",
      items: [
        "品質基準が第一：日本の厳しい食品基準を満たした商品のみを厳選し、品質面で妥協しません。",
        "チャレンジ精神：日本の食品技術や食文化の最新トレンドを、いち早くモンゴル市場へ紹介します。",
      ],
    },
    {
      title: "Health",
      subtitle: "健康を最優先に考える",
      items: [
        "長寿の秘訣：\"食は薬\" という考えのもと、安心・安全で栄養バランスの良い食品を提案します。",
        "健康な未来へ：今日の正しい食選びが、明日の健やかな社会につながると信じています。",
      ],
    },
  ]

  const vision = isJa ? visionJa : visionMn
  const values = isJa ? valuesJa : valuesMn

  return (
    <main className="min-h-screen">
      {/* Бидний тухай - People • First • Health */}
      <section className="bg-white px-4 md:px-8 lg:px-16 py-14 md:py-20 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-4">
            {isJa ? "会社概要" : "Бидний тухай"}
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-black dark:text-white text-center mb-2 tracking-wide">
            People <span className="text-sky-500 mx-1">•</span> First
            <span className="text-sky-500 mx-1">•</span> Health
          </p>
          <p className="text-lg text-black/80 text-center mb-12 leading-relaxed dark:text-white">
            {isJa ? (
              <>
                私たちの事業の中心には常に<strong>「人（People）」</strong>
                がいます。だからこそ、お客様の健康のために最も高い{" "}
                <strong>品質（First）</strong>
                を優先し、日本の伝統と現代のヘルシーな{" "}
                <strong>食文化（Health）</strong>
                を食卓にお届けしています。私たちは単なる輸入業者ではなく、
                あなたの健康的なライフスタイルのパートナーでありたいと考えています。
              </>
            ) : (
              <>
                Бидний үйл ажиллагааны цөмд <strong>ХҮН</strong> (People) байдаг.
                Тийм ч учраас бид таны эрүүл мэндийн төлөө хамгийн чанартайг нь{" "}
                <strong>НЭГДҮГЭЭРТ</strong> (First) тавьж, Японы уламжлалт болон
                орчин үеийн <strong>ЭРҮҮЛ</strong> (Health) хүнсний соёлыг таны
                ширээнд авчирна. Бид зөвхөн импортлогч биш, таны эрүүл амьдралын
                хэв маягийн хамтрагч билээ.
              </>
            )}
          </p>

          <div className="border-t border-sky-200 pt-10 dark:border-white">
            <h3 className="text-xl font-bold text-black mb-3 dark:text-white">
              {isJa ? "ビジョン" : "Алсын хараа"}
            </h3>
            <p className="text-black/80 leading-relaxed dark:text-white">{vision}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-black mb-6 dark:text-white">
              {isJa ? "バリュー" : "Үнэт зүйлс"}
            </h3>
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

      
    </main>
  )
}