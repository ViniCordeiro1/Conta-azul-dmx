import { Container } from "./Container";
import Image from "next/image";

import Empresas from "@/assets/609c241745157f67f0b281f8_Pequenas-Empresas-Grandes-Negocios_rfqojv-1-1.png"
import Exame from "@/assets/path68-8.png"
import Forbes from "@/assets/path2.png"


export function SectionOnMidia () {
    return (
        <Container>
            <section className="flex w-full h-[321px] py-[70px] justify-center">
                <div>
                    <div className="text-center">
                        <h2 className="text-[42px] font-bold mb-5">Conta Azul na <span className="text-primary-blue">mídia!</span></h2>
                        <p className="text-second-gray mb-5">Veja o que estão falando da gente nas redes.</p>
                    </div>
                    <div className="flex gap-[130px] items-center justify-between">
                        <Image
                            src={Empresas}
                            alt="Empresas e negocios"
                            className="w-[137px] h-[64px]"
                        />
                        <Image
                            src={Exame}
                            alt="exame"
                            className="w-[138px] h-[24px]"
                        />
                        <Image
                            src={Forbes}
                            alt="Forbes"
                            className="w-[137px] h-[36px]"
                        />
                    </div>
                </div>
            </section>
        </Container>
    )
}