'use client'

import { motion } from "framer-motion";
import { Container } from "../Container";
import ImageSlider from "./ActiconSlider";

export function SectionSegments() {
    return (
        <section className="flex md:py-[70px] py-10 md:justify-center items-center bg-backgrou-gray">
                <motion.div className="flex flex-col lg:w-[1200px] md:w-[928px] sm:w-[608px] w-[350px] md:px-[16px] sm:px-[16px] px-[16px]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                >
                    <h2 className="lg:text-[42px] text-[37.5px] font-bold pb-5"><span className="text-primary-blue">Segmentos</span> Variados</h2>
                    <p className="text-second-gray pb-5">Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu perfil de negócio?</p>

                    <ImageSlider />
                </motion.div>
                
                

        </section>
    )
}