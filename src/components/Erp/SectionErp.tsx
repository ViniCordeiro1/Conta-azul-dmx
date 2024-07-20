'use client'

import { Container } from "../Container"
import Image from "next/image"
import SiteSeguro from "@/assets/img/site-seguro-1024x840-1.png"
import { motion } from "framer-motion"

export function SectionErp() {
    return (
        <section className="flex bg-backgrou-gray py-[70px] md:justify-center">
            
                <div className="md:flex flex-wrap w-[1200px] justify-between items-center px-[16px] md:px-0">
                    <div className="flex lg:w-[1200px] md:w-[926px] sm:w-[608px] justify-center items-center">
                        <h1 className="text-[42px] sm:text-[37.5] font-bold mb-10">
                            Um ERP <span className="text-primary-blue">simples </span> e <span className="text-primary-blue">seguro</span>
                        </h1>
                    </div>
                    <motion.div 
                    className="flex flex-wrap md:gap-0 gap-[60px] items-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    
                    >

                        <div className=" md:mr-[60px]">
                            <Image 
                                src={SiteSeguro}
                                alt="site seguro"
                                className="lg:w-[600px] md:w-[463px] sm:w-[608px]"
                            />
                        </div>
                        <motion.div className="flex flex-col md:w-[403px] sm:w-[608px] text-left origin-center justify-center"
                        initial={{ opacity: 0, y: 200, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 200, scale: 0.5 }}
                        transition={{ duration: 1 }}>
                            
                            <h2 className="text-[32px] font-bold mb-5 md:w-[403px] sm:w-[403px] leading-tight">Livre-se das planilhas e assuma o controle da sua empresa, tudo na nuvem.</h2>

                            <p className="text-second-gray mb-5">Um ERP para gestão financeira com um poderoso ecossistema que transforma a relação das empresas com seus contadores e bancos.</p>

                            <p className="text-second-gray">ERP financeiro com funcionalidades essenciais para todo negócio: gestão de clientes, 
                                controle de vendas, emissão de NFs eletrônicas, automatização da cobrança, contratos
                                recorrentes, produtos e estoque, contas a pagar/receber, conciliação bancária com 
                                importação automática do extrato e integração direta com o contador.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            
        </section>
    )
}