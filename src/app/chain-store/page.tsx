 "use client"

import { Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ChainStorePage() {
  const stores = [
    {
      id: 1,
      images: [
        "/branch-BZ/fba10184-2b3c-4bc5-999f-55a3299acb44.jpeg",
        "/branch-BZ/e631222e-c2a3-4c61-8471-913b65513b96.jpeg",
        "/branch-BZ/dde2cfe2-1064-4361-9a30-d263f5467f6c.jpeg",
      ],
      name: "Баянзүрх салбар",
      address: " Улаанбаатар хот, Баянзүрх дүүрэг, 6-р хороо, 64-р байр ,Ү-2 тоот",
      mapLink: "https://maps.app.goo.gl/ghqBKjehe9zwirm96",
      phone: "+976 99054149",
      hours: "11:00 - 19:00",
      description: "Баянзүрх дүүргийн хүнсний захын хажууд байрлалтай",
      features: ["Хүнсний захын дэргэд", "Зогсоол", "Хотын төвд", "Төв замтай ойр", "Зөвлөгөө"],
    },
    {
      id: 2,
      images: [
        "/branch-tz/506e851f-e619-45ad-8baf-6b00d44c1746.jpeg",
        "/branch-tz/1fbfcf39-b753-49e3-9e16-eec8dfa6dbf9.jpeg",
        "/branch-tz/61f839b3-988e-49cf-9028-7459ba117ac0.jpeg",
      ],
      name: "Төмөр зам салбар",
      address: "Улаанбаатар хот, Баянгол дүүрэг, 1-р хороо, 136-р байр ,S-104 тоот",
      mapLink: "https://maps.app.goo.gl/XG25661w4pCxjVyXA",
      phone: "+976 99001219",
      hours: "10:00 - 19:00",
      description: "Улаанбаатар төмөр замын төв буудлаас 2 минут",
      features: ["Хүнсний Барс худалдааны төвийн хойно", "Зогсоол", "Нарны зам дагуу", "Ресторан", "Зөвлөгөө"],
    },
    {
      id: 3,
      images: [
        "/branch-yarmag/2073_top.jpg",
        "/branch-yarmag/2073_top.jpg",
        "/branch-yarmag/2073_top.jpg",
      ],
      name: "Яармаг салбар",
      address: "Хан-Уул дүүрэг, Яармаг, Foodcity худалдааны төв",
      mapLink: "https://maps.app.goo.gl/XG25661w4pCxjVyXA",
      phone: "+976 99892111",
      hours: "11:00 - 20:00",
      description: "Яармагийн хорооллын хамгийн том худалдааны төвд байрлалтай",
      features: ["Хүнсний зах дотор", "Зогсоол", "Зөвлөгөө", "Нарны зам дагуу", "Ресторан"],
    },
    {
      id: 4,
      images: [],
      name: "Шинэ салбар",
      address: "",
      mapLink: "",
      phone: "",
      hours: "",
      description: "",
      features: [],
      openingDate: "2026-03-15",
    },
    {
      id: 5,
      images: [],
      name: "Шинэ салбар",
      address: "",
      mapLink: "",
      phone: "",
      hours: "",
      description: "",
      features: [],
      openingDate: "2026-04-15",
    },
    {
      id: 6,
      images: [],
      name: "Шинэ салбар",
      address: "",
      mapLink: "",
      phone: "",
      hours: "",
      description: "",
      features: [],
      openingDate: "2026-05-15",
    },
  ]
  const advantages = [
    {
      title: "Шинэ, чанартай бүтээгдэхүүн",
      desc: "Япон улсын ISO чанарын стандартын бүтээгдэхүүн",
    },
    {
      title: "Өргөн сонголт",
      desc: "1000+ төрлийн бүтээгдэхүүн",
    },
    {
      title: "Тохиромжтой байрлал",
      desc: "Таны цагийг хэмнэсэн ойрхон салбаруудтай",
    },
  ]

  return (
    <main className="min-h-screen bg-background ">
      <div className="px-4 md:px-8 lg:px-16 py-12">
        {/* Hero / Танилцуулга */}
        <section className="mb-16 mt-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600 dark:bg-blue-600 text-white dark:text-foreground text-sm font-medium mb-6">
            Хүнсний сүлжээ дэлгүүр
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Манай салбарууд
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Япон соёл, япон стандартыг баримталсан үйлчилгээг Монголын хэрэглэгчдэд хүргэнэ.
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
            {stores.map((store) => {
              const isUpcoming = (store as any).openingDate
            return (
              <div
                key={store.id}
                className="border border-blue-700 dark:border-white rounded-xl p-6 hover:shadow-lg transition-shadow bg-card"
              >
                <div className="mb-4">
                  {isUpcoming ? (
                    <div className="flex items-center justify-center h-52 sm:h-56 md:h-64 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/40 text-blue-700 text-sm md:text-base font-medium text-center px-4">
                      Шинэ салбар{" "}
                      <span className="font-semibold ml-1">
                        {(store as any).openingDate}
                      </span>{" "}
                      өдөр нээгдэнэ.
                    </div>
                  ) : (
                    <Carousel
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 4000,
                          stopOnInteraction: false,
                        }),
                      ]}
                    >
                      <CarouselContent className="ml-0">
                        {store.images.map((src, index) => (
                          <CarouselItem key={index} className="pl-0">
                            <div className="overflow-hidden rounded-xl">
                              <Image
                                src={src}
                                alt={`${store.name} зураг ${index + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-52 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {store.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 border-0 bg-black/30 hover:bg-black/50 text-white" />
                          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 border-0 bg-black/30 hover:bg-black/50 text-white" />
                        </>
                      )}
                    </Carousel>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {isUpcoming ? "Шинэ салбар" : store.name}
                </h3>
                {isUpcoming ? (
                  <div className="space-y-2 text-sm text-muted-foreground mb-2">
                    <p>
                      Нээлтийн өдөр:{" "}
                      <span className="font-semibold text-blue-700">
                        {(store as any).openingDate}
                      </span>
                    </p>
                    <p>Дэлгэрэнгүй мэдээллийг удахгүй нийтлэнэ.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground mb-4">
                      {store.description}
                    </p>
                    <div className="space-y-3 text-muted-foreground mb-4">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />
                        <a
                          href={store.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-300 leading-snug"
                        >
                          {store.address}
                        </a>
                      </div>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold text-foreground shrink-0">
                          <Phone className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />
                        </span>
                        <a
                          href={`tel:${store.phone.replace(/\s/g, "")}`}
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {store.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          <Clock className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />
                        </span>
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
                  </>
                )}
              </div>
            )})}
          </div>
        </section>
      </div>
    </main>
  )
}