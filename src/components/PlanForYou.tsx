import { Container } from "./Container";
import { Form } from "./Form";
import Image from "next/image";
import Controle from "@/assets/controle-1024x976-1.webp"

export function PlanForYou () {
    return (
        <Container>
            <section className="flex  w-full pt-[140px] pb-[70px] justify-between items-center">
                <div className="flex-1 max-w-[479px] items-center">
                    <h1 className="text-[42px] font-bold leading-tight">
                        <span className="text-primary-blue">Controle </span>
                         seu negócio e <span className="text-primary-blue">ganhe tempo </span> 
                         com o ERP Conta Azul.
                    </h1>

                    <h2 className="text-second-gray mt-5">
                        ERP financeiro simples, seguro e de fácil implantação. Automatize 
                        suas rotinas financeiras e tenha suas informações organizadas. 
                        Mais controle, tempo e previsibilidade para tomar as melhores decisões.
                    </h2>
                    <Form />
                </div>
                    
                    <Image src={Controle} alt="Contas a pagar" className=" w-auto h-[547px] mr-[80px] "/>

            </section>
        </Container>
    )
}