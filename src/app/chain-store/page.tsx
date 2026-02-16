import Image from "next/image"

export default function ChainStorePage() {
  const stores = [
    {
      id: 1,
      image:"/branch-BZ/638e6e0a54ac0f00195106b9.webp",
      name: "Баянзүрх салбар",
      address: "Сүхбаатар дүүрэг, Сүхбаатарын талбай 1",
      phone: "+976 99054149",
      hours: "11:00 - 19:00",
      description: "Хот орчны төвд байрласан, хамгийн том салбар",
      features: ["Дэлгэрэнгүй хүнс", "Кафе", "Достав"],
    },
    {
      id: 2,
      image:"/branch-tz/Nijiya_KA-1.jpg",
      name: "Төмөр зам салбар",
      address: "Хан-Уул дүүрэг, Их намын гудамж 15",
      phone: "+976 99001219",
      hours: "11:00 - 19:00",
      description: "Шөнийн 11 цаг хүртэл нээлттэй",
      features: ["24/7 автомат", "Паркинг", "Сэргээгдэх эрчим хүч"],
    },
    {
      id: 3,
      image:"/branch-yarmag/2073_top.jpg",
      name: "Яармаг салбар",
      address: "Баянгол дүүрэг, Барилгын гудамж 8",
      phone: "+976 99892111",
      hours: "11:00 - 20:00",
      description: "Гэр бүлийн хэрэглээнд зориулсан",
      features: ["Хүүхэд зуслан", "Дэлгэрэнгүй сонголт", "Зөвлөгөө"],
    },
  ]
  const advantages = [
    {
      title: "Шинэ, чанартай бүтээгдэхүүн",
      desc: "Өдөр бүр шинээр нийлүүлэлт хийгддэг",
    },
    {
      title: "Өргөн сонголт",
      desc: "Мянга гаруй нэр төрлийн хүнс, ундаа",
    },
    {
      title: "Тохиромжтой байрлал",
      desc: "Хот даяар салбаруудтай",
    },
  ]

  return (
    <main className="min-h-screen bg-background border-4 border-green-700">
      <div className="px-4 md:px-8 lg:px-16 py-12">
        {/* Hero / Танилцуулга */}
        <section className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium mb-6">
            Хүнсний сүлжээ дэлгүүр
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Манай салбарууд
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Тав тухтай орчин, чанартай бүтээгдэхүүн, хүндэтгэлтэй үйлчилгээгээр
            Улаанбаатар хотод таньд үйлчилж байна.
          </p>
        </section>

        {/* Давуу талууд */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border border-border bg-card/50"
              >
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4 text-white dark:text-amber-400 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Салбарууд */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Дэлгүүрийн байршил
          </h2>
          <p className="text-muted-foreground mb-8">
            Ойрхон салбартаа зочлоорой
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                className="border border-blue-700 dark:border-white rounded-xl p-6 hover:shadow-lg transition-shadow bg-card"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={500}
                    height={500}
                    className="rounded-xl w-full h-50 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {store.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {store.description}
                </p>
                <div className="space-y-3 text-muted-foreground mb-4">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground shrink-0">
                      Хаяг:
                    </span>
                    {store.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-foreground shrink-0">
                      Утас:
                    </span>
                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {store.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Нээлт:
                    </span>{" "}
                    {store.hours}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {store.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-blue-700 dark:bg-blue-600/80 text-white dark:text-white"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}