'use client'

import { Container } from "../Container"
import Image from "next/image"
import Mapa from "@/assets/img/mapa2.png"
import { motion } from "framer-motion"

export function PlanForYouClientes () {
    return (
        <section className="w-full py-[70px]  bg-backgrou-gray">
            <Container>
                <motion.div className="flex flex-1 flex-wrap justify-between items-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                >
                <motion.div className="w-[585] h-[151px]"
                 initial={{ opacity: 0, y: 200, scale: 0.5 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 200, scale: 0.5 }}
                 transition={{ duration: 1 }}   
                >
                <h2 className="text-[42px] font-bold leading-tight">Já ajudamos <br/><span className="text-primary-blue">milhares de clientes</span> <br/>no Brasil todo!</h2>
                 </motion.div>
                    <div className="w-[526px]">
                        <Image 
                            src={Mapa}
                            alt="Mapa"
                        />
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}