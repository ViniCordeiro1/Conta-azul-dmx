import { HomeResultSlide } from "@/components/HomeResultSlide";
import { PlanForYou } from "@/components/PlanForYou";
import { SectionErp } from "@/components/SectionErp";
import { SectionOnMidia } from "@/components/SectionOnMidia";
import { SectionSegments } from "@/components/SectionSegments";

export default function Home() {
  return (
    <main >
      <PlanForYou />
      <SectionErp />
      <HomeResultSlide />
      <SectionSegments />
      <SectionOnMidia />
    </main>
  );
}
