import { allPosts } from "contentlayer/generated";
import HeroSection from "@/components/ui/HeroSection";
import BentoGrid from "@/components/ui/BentoGrid";

export default function HomePage() {
  const posts = allPosts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <div className="px-6 pt-32 pb-20">
      <HeroSection />
      <BentoGrid posts={posts} />
    </div>
  );
}
