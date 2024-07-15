'use client'

import Carousel from "./Carousel1";
import { Container } from "../Container";
import { motion } from "framer-motion";


export function HomeResultSlide() {
    return (
            <section className="flex flex-wrap w-full py-[70px] justify-center">
        <Container>
                <div className="flex flex-1 flex-wrap justify-center w-[1105px]">
                    <h2 className="text-[42px] font-bold leading-tight text-center">O resultado: seu negócio mais <span className="text-primary-blue">organizado, <br/> produtivo </span> 
                    e com maior potencial de <span className="text-primary-blue">crescimento!</span></h2>
                </div>
        </Container>
            <motion.div className="flex flex-wrap w-full justify-center"
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 1 }}
            >
            <Carousel />
            </motion.div>
        
            </section>
    )
}