
import { CoverCarousel } from "@/_component/CoverCarousel";
import HomePage from "@/_component/HomePage";
import { ComingSoonBadge } from "@/_component/ComingSoonBadge";

export default function Home() {
  return (
    <div className="mt-15 mb-15 relative">
      <CoverCarousel />
      <HomePage />
      
    </div>
  );
}
