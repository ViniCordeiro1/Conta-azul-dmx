'use client'

import { Container } from "../Container"
import Image from "next/image"
import Mapa from "@/assets/img/mapa2.png"
import { motion } from "framer-motion"

export function PlanForYouClientes () {
    return (
        <section className="flex  md:py-[70px] sm:py-[70px] py-10 md:justify-center items-center  bg-backgrou-gray">
                <motion.div className="flex  flex-wrap w-[1200px] px-[16px] justify-between items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    >
                    <motion.div className="lg:w-[585px] lg:h-[151px] mb-5"
                        initial={{ opacity: 0, y: 200, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 1 }}   
                        >
                        <h2 className="lg:text-[42px] sm:text-[37.5px] text-[35.7px] lg:w-[587px] md:w-[434px] sm:w-[608px] w-[350px] font-bold leading-tight">Já ajudamos <br/><span className="text-primary-blue">milhares de clientes</span> <br/>no Brasil todo!</h2>
                    </motion.div>
                        <div className="lg:w-[528px] md:w-[408px] sm:w-[580px] w-[350px]">
                            <Image 
                                src={Mapa}
                                alt="Mapa"
                            />
                        </div>
                </motion.div>
        </section>
    )
}