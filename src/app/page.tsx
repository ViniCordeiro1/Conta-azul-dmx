import { HomeResultSlide } from "@/components/HomeResultSlide";
import { PlanForYou } from "@/components/PlanForYou";
import { Negocios } from "@/components/Negocios";
import { SectionErp } from "@/components/SectionErp";
import { SectionOnMidia } from "@/components/SectionOnMidia";
import { SectionSegments } from "@/components/SectionSegments";
import { PlanForYouClientes } from "@/components/PlanForYou-Clientes";
import { TalkExpert } from "@/components/TalkExpert";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <PlanForYou />
      <SectionErp />
      <HomeResultSlide />
      <SectionSegments />
      <SectionOnMidia />
      <PlanForYouClientes />
      <Negocios />
      <TalkExpert />
      <Footer />
    </main>
  );
}
