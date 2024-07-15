'use client'

import { Container } from "../Container"
import Image from "next/image"
import Negocio from "@/assets/img/plano-negocio-947x1024-1.png"
import { motion } from "framer-motion"

export function Negocios () {
    return (
        <section className="flex w-full py-[70px]">
            <Container>
                <div className="flex flex-1 flex-wrap justify-between items-center">
                    <motion.div className="flex flex-col w-[513px]"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    >
                        <h2 className="h-[201px] text-[42px] font-bold leading-tight mb-5">Temos o plano <br/>perfeito para o <br/>seu
                            <span className="text-primary-blue"> negócio</span> e para <br/>
                            o seu <span className="text-primary-blue">bolso!</span>
                        </h2>
                        <p className=" text-second-gray mb-5">ERP financeiro simples, seguro e de fácil implantação. Automatize suas 
                            rotinas financeiras e tenha suas informações organizadas. Mais controle, 
                            tempo e previsibilidade para tomar as melhores decisões.
                        </p>

                        <button className="h-[52px] w-[135px] px-6 py-3 bg-primary-green text-sm text-white rounded-[5px] mb-[30px] hover:bg-green-600">Saiba mais</button>

                    </motion.div>
                    <motion.div className="flex w-[580px]"
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    >
                        <Image 
                            src={Negocio}
                            alt="Plano de negocio"
                        />
                    </motion.div>

                </div>
            </Container>

        </section>
    )
}