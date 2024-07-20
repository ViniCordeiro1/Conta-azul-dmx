'use client'

import { Container } from "../Container";
import Image from "next/image";

import Empresas from "@/assets/img/609c241745157f67f0b281f8_Pequenas-Empresas-Grandes-Negocios_rfqojv-1-1.png"
import Exame from "@/assets/img/path68-8.png"
import Forbes from "@/assets/img/path2.png"
import { motion } from "framer-motion";


export function SectionOnMidia () {
    return (
            <section className="flex  md:py-[70px] py-10 md:justify-center justify-center items-center">
                <div className="flex flex-wrap w-[1200px] justify-center items-center md:px-[16px] sm:px-[16px] px-[16px]">
                    <div className="flex md:flex-col flex-col lg:w-[1200px] sm:w-[608px] md:w-[928px] w-[350px]  items-center justify-center">
                        <h2 className="md:text-[42px] sm:text-[37.5px] text-[37.5px] text-center font-bold mb-5">Conta Azul na <span className="text-primary-blue">mídia!</span></h2>
                        <p className="text-second-gray mb-5 text-center">Veja o que estão falando da gente nas redes.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[30px] lg:gap-[130px] md:gap-[130px] items-center">
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
    )
}