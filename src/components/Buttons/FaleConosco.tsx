'use client'

import { motion } from "framer-motion"

export function FaleConosco() {
    return (
        <div>
            <motion.button className="flex flex-col  md:justify-evenly items-center lg:w-[192px] w-[91px] h-[55px] fixed z-40 lg:left-[1720px] lg:bottom-0 lg:rounded-t-lg lg:rounded-b-none sm:left-[530px] left-72 md:left-[850px] bottom-12 rounded-[30px] bg-bg-fc-blue  hover:shadow-[inset_-12px_-8px_40px_#0000004b]"
                initial={{ bottom: -100 }}
                animate={{ bottom: 0 }}
                transition={{ duration: 0.5 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24">
                <path fill="#fff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Zm.1-8h.01M12 12h.01M16 12h.01"/>
                </svg>
                <p className="text-white text-[10px] lg:text-[16px]">Fale conosco</p>
            </motion.button>
        </div>
    )
}