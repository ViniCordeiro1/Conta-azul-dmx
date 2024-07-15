'use client'

import { motion } from "framer-motion";
import { Container } from "../Container";
import ImageSlider from "./ActiconSlider";

export function SectionSegments() {
    return (
        <section className="flex flex-wrap w-full bg-backgrou-gray py-[70px]">
            <Container>
                <motion.div className="w-[1200px] flex flex-col"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                >
                    <h2 className="text-[42px] font-bold pb-5"><span className="text-primary-blue">Segmentos</span> Variados</h2>
                    <p className="text-second-gray pb-5">Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu perfil de negócio?</p>

                    <div>
                    <ImageSlider />
                    </div>
                </motion.div>
            </Container>
                
                

        </section>
    )
}