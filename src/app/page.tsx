
import { CoverCarousel } from "@/_component/CoverCarousel";
import ProductsPage from "@/app/products/page";

import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-15 mb-15">
      <CoverCarousel/>
      <ProductsPage/>
    </div>
  );
}
