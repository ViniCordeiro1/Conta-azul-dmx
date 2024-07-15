'use client'

import { Container } from "../Container";
import { Form } from "./Form";
import Image from "next/image";
import Controle from "@/assets/img/controle-1024x976-1.webp"
import { motion } from "framer-motion";

export function PlanForYou () {
    return (
        <Container>
            <section className="flex  w-full pt-[140px] pb-[70px] justify-between items-center">
                <motion.div
                          className="flex w-full justify-between items-center"
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1 }}
                >
                <motion.div
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 200, scale: 0.5 }}
                transition={{ duration: 1 }}
                className="origin-center"
                >

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
                </motion.div>
                    
                    <Image src={Controle} alt="Contas a pagar" className=" w-auto h-[547px] mr-[80px] "/>
                    </motion.div>

            </section>
        </Container>
    )
}