'use client'

import Image from "next/image";
import { ItemMenu } from "./ItemMenu";

import Logo from '@/assets/img/Logo.svg';
import { Search } from "../Buttons/Search";
import { Button } from "../Buttons/Button";
import { Container } from "../Container";
import { motion } from "framer-motion";
import { ButtonMenu } from "../Buttons/ButtonMenu";
import { MobileNav } from "../Buttons/MobileNav";

export function Header() {



    return (

        
        <motion.header className="flex w-[100vw] h-20 bg-white border-b-[1px] drop-shadow-md fixed z-40 md:justify-center items-center"
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
        >
            
                <div id="NavBar" className="flex w-[1280px] lg:px-10 md:justify-between md:px-[30px] px-[15px]" >
                    <div className="flex items-center gap-7">
                        <Image className="w-[100px] h-[13px] lg:w-[150px] lg:h-[19px]"
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className="lg:flex items-center gap-7 text-primary-gray md:hidden sm:hidden hidden">
                            <li>
                                <ItemMenu
                                    name="Funcionalidades"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Segmentos"
                                />
                            </li>
                            <li className="cursor-pointer">
                                <p className="text-sm hover:text-primary-blue duration-300">Planos</p>
                            </li>
                            <li>
                                <ItemMenu
                                    name="Parceiros"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-7 text-primary-gray text-sm  justify-end items-center">
                            <div className="lg:block md:hidden sm:hidden hidden">
                            <Search />
                            </div>
                            <span className="flex flex-col">
                                Fale Conosco
                                <a className="text-primary-blue md:font-[14px]"
                                href="" target="_blank">WhatsApp</a>
                            </span>
                            <div className="md:block hidden">
                            <Button
                                name="Entrar"
                            />
                            </div>
                            <div className="flex lg:hidden"><ButtonMenu /></div>
                        </div>
                    </div>
            
                </div>
                
                    
        </motion.header>
    )
}