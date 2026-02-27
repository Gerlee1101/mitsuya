"use client"

import { useLanguage } from "@/_component/LanguageProvider"

export default function RecipesPage() {
  const { lang } = useLanguage()
  const isJa = lang === "ja"

  return (
    <main className="min-h-screen bg-background px-4 md:px-8 lg:px-16 py-16 mt-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {isJa ? "レシピ" : "Жор"}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          {isJa
            ? "Mitsuya の商品を使った料理・デザート・サラダなどのレシピは現在準備中です。"
            : "Mitsuya-ийн бүтээгдэхүүнээр хийж болох хоол, дессерт, салатны жоруудыг бэлтгэж байна."}
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          {isJa
            ? "近日中に日本の食文化を取り入れたオリジナルレシピを公開いたします。"
            : "Удахгүй Япон хүнсний соёлыг шингээсэн жор, жишээ цэсүүдийг эндээс харах боломжтой болно."}
        </p>
      </div>
    </main>
  )
}

