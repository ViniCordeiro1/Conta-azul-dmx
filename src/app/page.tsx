import { HomeResultSlide } from "@/components/HomeResult/HomeResultSlide";
import { PlanForYou } from "@/components/PlaneForYou/PlanForYou";
import { Negocios } from "@/components/Negocios/Negocios";
import { SectionErp } from "@/components/Erp/SectionErp";
import { SectionOnMidia } from "@/components/OnMidia/SectionOnMidia";
import { SectionSegments } from "@/components/Segments/SectionSegments";
import { PlanForYouClientes } from "@/components/PlanForYouClients/PlanForYou-Clientes";
import { TalkExpert } from "@/components/TalkExpert/TalkExpert";
import { Footer } from "@/components/Footer/Footer";
import { BFalaAi } from "@/components/Buttons/FalaAi";

export default function Home() {
  return (
    <main >
      <PlanForYou />
      <SectionErp />
      <HomeResultSlide />
    </main>
  );
}
