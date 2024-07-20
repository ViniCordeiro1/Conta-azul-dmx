'use client'

import { Container } from "../Container";
import Image from "next/image";
import Atendente from "@/assets/img/atendente.webp"
import { TalkButton } from "./TalkButton";
import { motion } from "framer-motion";

export function TalkExpert() {
    return (
        <section className="flex py-[70px] sm:py-[70px]  md:justify-center items-center  bg-backgrou-gray">
                <div className="flex flex-wrap w-[1200px] px-[16px] justify-between items-center">
                    <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    >
                        <Image
                            className="w-[358px] sm:w-[304px] md:w-[464px] lg:w-[580px] rounded-lg" 
                            src={Atendente}
                            alt="Atentende"
                        />
                    </motion.div>
                    <motion.div className="flex flex-col w-[358px] sm:w-[284px] md:w-[444px] lg:w-[500px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    >
                        <h2 className="font-bold lg:text-[42px] sm:text-[42px] text-[35px] leading-tight mb-5">Tem dúvidas de como a Conta Azul <br/>pode 
                            <span className="text-primary-blue"> ajudar o seu negócio?</span>
                        </h2>
                        <p className="text-second-gray mb-5">Fale com nosso time de especialistas e tire todas as suas dúvidas</p>
                        <a className="text-primary-blue" href="">Falar com um especialista</a>
                    </motion.div>
                    <div className="flex justify-center w-[358px] sm:w-[608px] md:w-[928px] lg:w-[1200px] mt-[80px] md:mt-[140px]">
                        <TalkButton />
                    </div>
                </div>
        </section>
    )
}