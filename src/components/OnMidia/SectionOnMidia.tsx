'use client'

import { Container } from "../Container";
import Image from "next/image";

import Empresas from "@/assets/609c241745157f67f0b281f8_Pequenas-Empresas-Grandes-Negocios_rfqojv-1-1.png"
import Exame from "@/assets/path68-8.png"
import Forbes from "@/assets/path2.png"
import { motion } from "framer-motion";


export function SectionOnMidia () {
    return (
        <Container>
            <section className="flex w-full py-[70px] justify-center">
                <div>
                    <div className="text-center">
                        <h2 className="text-[42px] font-bold mb-5">Conta Azul na <span className="text-primary-blue">mídia!</span></h2>
                        <p className="text-second-gray mb-5">Veja o que estão falando da gente nas redes.</p>
                    </div>
                    <div className="flex gap-[130px] items-center justify-between">
                        <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        >
                        <Image
                            src={Empresas}
                            alt="Empresas e negocios"
                            className="w-[137px] h-[64px]"
                        />
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 1 }}>
                        <Image
                            src={Exame}
                            alt="exame"
                            className="w-[138px] h-[24px]"
                        />
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 1.5 }}>
                        <Image
                            src={Forbes}
                            alt="Forbes"
                            className="w-[137px] h-[36px]"
                        />
                        </motion.div>
                    </div>
                </div>
            </section>
        </Container>
    )
}