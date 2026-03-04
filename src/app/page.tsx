
import { CoverCarousel } from "@/_component/CoverCarousel";
import HomePage from "@/_component/HomePage";
import { ComingSoonBadge } from "@/_component/ComingSoonBadge";
import { Ceo } from "@/_component/Ceo";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="pt-16 md:pt-20 pb-12 md:pb-16">
        <CoverCarousel />
        <HomePage />
        <Ceo />
      </div>
    </main>
  );
}
