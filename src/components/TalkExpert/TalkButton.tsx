'use client'

import Image from "next/image"
import IconWhatsApp from "@/assets/img/whatsapp_.png"
import Call from "@/assets/img/telephone-call_.png"
import { motion } from "framer-motion"

export function TalkButton() {
    return (
        <div className="flex gap-[15px] mt-[140px] justify-center">
            <motion.div className="flex w-[288px] h-[166px] p-10 bg-white items-center justify-center hover:bg-bg-hover duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            >
                <button className="flex flex-col items-center gap-5">
                    <Image 
                        className="w-[43px] h-auto"
                        src={IconWhatsApp}
                        alt="WhatsApp"
                    />

                    <p>Mande um WhatsApp</p>
                </button>
            </motion.div>

            <motion.div className="flex w-[288px] h-[166px] p-10 bg-white items-center justify-center hover:bg-bg-hover duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 1 }}
            >
                <button className="flex flex-col items-center gap-5">
                    <Image 
                        className="w-[42px] h-auto"
                        src={Call}
                        alt="WhatsApp"
                    />
                    <p>0800 600 0920</p>
                </button>
            </motion.div>
        </div>
    )
}