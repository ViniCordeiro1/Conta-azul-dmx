'use client'

import { Container } from "../Container";
import { Form } from "./Form";
import Image from "next/image";
import Controle from "@/assets/img/controle-1024x976-1.webp"
import { motion } from "framer-motion";

export function PlanForYou () {
    return (
        <section className="flex  pt-[140px] py-10 md:justify-center items-center">
                
                <motion.div
                            className="flex flex-wrap w-[1200px] justify-between items-center md:px-[16px] sm:px-[16px] px-[16px]"
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

                    
                        <div className="flex flex-wrap lg:w-[479px] md:w-[350px] sm:w-[608px]  items-center">
                            <h1 className="md:text-[42px] text-[37.5px]   font-bold leading-tight">
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
                        <div className="md:flex">
                        <Image src={Controle} alt="Contas a pagar" className="flex md:justify-end lg:w-[580px] md:w-[490px] sm:w-[580px] items-end md:mr-0 mr-[60px]"/>
                        </div>
                </motion.div>


        
            </section>
    )
}