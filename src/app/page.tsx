
import { CoverCarousel } from "@/_component/CoverCarousel";
import HomePage from "@/_component/HomePage";
import { ComingSoonBadge } from "@/_component/ComingSoonBadge";
import { Ceo } from "@/_component/Ceo";

export default function Home() {
  return (
    <div className="mt-15 mb-15 relative">
      <CoverCarousel />
      <HomePage />
      <Ceo/>
    </div>
  );
}
