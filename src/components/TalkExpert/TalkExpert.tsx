'use client'

import { Container } from "../Container";
import Image from "next/image";
import Atendente from "@/assets/atendente.webp"
import { TalkButton } from "./TalkButton";
import { motion } from "framer-motion";

export function TalkExpert() {
    return (
        <section className="w-full  py-[70px] bg-backgrou-gray">
            <Container>
                <div className="flex flex-wrap gap-10 items-center">
                    <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    >
                        <Image
                            className="w-[580px] h-[387px] " 
                            src={Atendente}
                            alt="Atentende"
                        />
                    </motion.div>
                    <motion.div className="flex flex-col w-[502px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    >
                        <h2 className="font-bold text-[42px] leading-tight mb-5">Tem dúvidas de como a Conta Azul <br/>pode 
                            <span className="text-primary-blue"> ajudar o seu negócio?</span>
                        </h2>
                        <p className="text-second-gray mb-5">Fale com nosso time de especialistas e tire todas as suas dúvidas</p>
                        <a className="text-primary-blue" href="">Falar com um especialista</a>
                    </motion.div>
                    <div className="flex flex-1 justify-center">
                        <TalkButton />
                    </div>
                </div>
            </Container>
        </section>
    )
}