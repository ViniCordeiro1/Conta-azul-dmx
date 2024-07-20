'use client'

import Carousel from "./Carousel1";
import { Container } from "../Container";
import { motion } from "framer-motion";


export function HomeResultSlide() {
    return (
            <section className="flex flex-wrap md:py-[70px] py-10 md:justify-center">
            <div className="flex flex-wrap lg:w-[1200px] md:w-[928px] sm:w-[600px] w-[350px] justify-between items-center px-[16px] md:px-0">
                    
                    <div className="flex  justify-center mb-5">
                        <h2 className="md:text-[42px] sm:text-[37.5px] text-[37.5px] font-bold leading-tight text-center lg:w-[1200px] md:w-[928px] sm:w-[608px] w-[350px]">O resultado: seu negócio mais <span className="text-primary-blue">organizado, <br/> produtivo </span> 
                        e com maior potencial de <span className="text-primary-blue">crescimento!</span></h2>
                    </div>
            
                <motion.div className="flex justify-center lg:w-[1200px] md:w-[928px] sm:w-[608px] w-[350px]"
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 200, scale: 0.5 }}
                transition={{ duration: 1 }}
                >
                <Carousel />
                </motion.div>
            
            </div>    
        
            </section>
    )
}