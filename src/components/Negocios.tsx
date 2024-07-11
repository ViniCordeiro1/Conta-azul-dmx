import { Container } from "./Container"
import Image from "next/image"
import Negocio from "@/assets/plano-negocio-947x1024-1.png"

export function Negocios () {
    return (
        <section className="flex w-full py-[70px]">
            <Container>
                <div className="flex flex-1 flex-wrap justify-between items-center">
                    <div className="flex flex-col w-[513px]">
                        <h2 className="h-[201px] text-[42px] font-bold leading-tight mb-5">Temos o plano <br/>perfeito para o <br/>seu
                            <span className="text-primary-blue"> negócio</span> e para <br/>
                            o seu <span className="text-primary-blue">bolso!</span>
                        </h2>
                        <p className=" text-second-gray mb-5">ERP financeiro simples, seguro e de fácil implantação. Automatize suas 
                            rotinas financeiras e tenha suas informações organizadas. Mais controle, 
                            tempo e previsibilidade para tomar as melhores decisões.
                        </p>

                        <button className="h-[52px] w-[135px] px-6 py-3 bg-primary-green text-sm text-white rounded-[5px] mb-[30px]">Saiba mais</button>

                    </div>
                    <div className="flex w-[580px]">
                        <Image 
                            src={Negocio}
                            alt="Plano de negocio"
                        />
                    </div>

                </div>
            </Container>

        </section>
    )
}