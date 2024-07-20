'use client'

import Image from "next/image"
import Logo from "@/assets/img/Logo.svg"
import AppStore from "@/assets/img/icon-apple.png"
import GooglePlay from "@/assets/img/icon-google.png"
import Aws from "@/assets/img/aws.webp"
import Awsp from "@/assets/img/awsp.webp"
import Siteseal from "@/assets/img/siteseal_gd_3_h_l_m.gif"
import { Container } from "../Container"
import { FaleConosco } from "../Buttons/FaleConosco"
import { motion } from "framer-motion"


export function Footer() {
    return (
        <footer className="flex  pt-[70px] md:py-[70px] py-10 justify-center items-center">
            
            <div className="flex flex-wrap items-center pb-[30px] px-[16px] w-[358]">
                <div className="flex flex-col text-center items-center">
                    <motion.div className="lg:pl-[30px] flex flex-col justify-center w-[358px] "
                    initial={{ opacity: 0, x: -30, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                        <ul className="flex flex-col items-center font-medium text-second-gray leading-loose
                        ">
                            <li><Image src={Logo} alt="Logo"/></li>
                            <li className="mt-[10px] cursor-pointer"><a href="" />Sobre</li>
                            <li className="mt-[10px] cursor-pointer"><a href="" />Sala de Imprensa</li>
                            <li className="mt-[10px] cursor-pointer"><a href="" />Trabalhe Conosco</li>
                            <li className="mt-[10px] cursor-pointer"><a href="" />Blog da conta Azul</li>
                        </ul>
                    </motion.div>

                    <motion.div className="lg:pl-[30px] flex flex-col justify-center w-[358px]"
                    initial={{ opacity: 0, x: -30, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 200, scale: 0.5 }}
                    transition={{ duration: 0.8 }}
                    >
                        <p className="font-bold  text-second-gray">Suporte</p>
                        <ul className="font-medium text-second-gray leading-loose">
                            <li className="mt-[10px] cursor-pointer"><a href="" />Central de Ajuda</li>
                            <li className="mt-[10px] cursor-pointer"><a href="" />Canal de ética</li>
                        </ul>
                    </motion.div>

                    <motion.div className="lg:pl-[30px] flex flex-col justify-center items-center w-[358px]"
                    initial={{ opacity: 0, x: -30, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 200, scale: 0.5 }}
                    transition={{ duration: 1.1 }}
                    >
                        <p className="font-bold  text-second-gray">Baixe nossos aplicativos</p>
                        <ul className="font-medium text-second-gray leading-loose">
                            <li className="mt-[10px] cursor-pointer w-[120px]"><Image src={AppStore} alt="Apple Store"/></li>
                            <li className="mt-[10px] cursor-pointer w-[120px]"><Image src={GooglePlay} alt="Apple Store"/></li>
                        </ul>
                    </motion.div>

                    <motion.div className="lg:pl-[30px] flex flex-col justify-center items-center w-[358px]"
                    initial={{ opacity: 0, x: -30, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 200, scale: 0.5 }}
                    transition={{ duration: 1.5 }}
                    >
                        <p className="font-bold  text-second-gray">Certificações</p>
                        <div className="flex flex-wrap my-4 gap-4">
                            <div><Image src={Aws} alt="AWS"/></div>
                            <div><Image src={Awsp} alt="AWS Patner"/></div>
                        </div>
                            <div><Image src={Siteseal} alt="Site seguro"/></div>
                    </motion.div>
                    </div>
                        <hr className="w-[350px] my-5"/>
                        <div className="flex flex-wrap justify-center items-center w-[358px]">
                            <ul className="flex justify-center w-[350px] mb-[30px]">

                                <motion.li className=""
                                initial={{ opacity: 0, x: -30, scale: 0.5 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 200, scale: 0.5 }}
                                transition={{ duration: 0.5 }}>
                                    <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                                    <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                                    </svg></a>
                                </motion.li>

                                <motion.li className="pl-[10px]"
                                initial={{ opacity: 0, x: -30, scale: 0.5 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 200, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                                    <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                                    <circle cx="14.87" cy="5.26" r="1.09"></circle>
                                    <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                                    </svg></a>
                                </motion.li>

                                <motion.li className="pl-[10px]"
                                initial={{ opacity: 0, x: -30, scale: 0.5 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 200, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                                    <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                                    <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                                    </svg></a>
                                </motion.li>

                                <motion.li className="pl-[10px]"
                                initial={{ opacity: 0, x: -30, scale: 0.5 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 200, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                                    <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path>
                                    </svg></a>
                                </motion.li>
                            </ul>
                    <div className="flex">
                        <ul className="flex text-second-gray">
                            <li><a href="">Termos de uso</a></li>
                            <li className="pl-5"><a href="">Política de privacidade</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                <motion.div className="md:flex w-full h-[60px] fixed bottom-0  z-10 bg-bg-primary-blue hidden "
                initial={{ bottom: -100 }}
                animate={{ bottom: 0 }}
                transition={{ duration: 0.5 }}
                >
                    <div className="w-full p-[15px]">
                        <p className="flex text-white fill-white justify-end">Quer falar com um especialista? <svg width="20" height="20" viewBox="0 0 20 20">
						<path fill="none" stroke="#fff" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"></path>
						<circle cx="10.5" cy="16.5" r=".8"></circle>
						</svg><span className="font-bold cursor-pointer">0800 600 0920</span> </p>
                    </div>
                    <div className="w-full h-[60px] bg-bg-second-blue">
                        <div className="w-full p-[15px]">
                            <p className="flex text-white font-bold fill-white gap-3 cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20">
							<path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path>
							</svg>Fale com a gente no Whatsapp</p>
                        </div>
                    </div>
                </motion.div>
                        <FaleConosco />


        </footer>
    )
}