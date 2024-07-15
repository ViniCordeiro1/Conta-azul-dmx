'use client'

import Image from "next/image";
import { ItemMenu } from "./ItemMenu";

import Logo from '@/assets/img/Logo.svg';
import { Search } from "../Buttons/Search";
import { Button } from "../Buttons/Button";
import { Container } from "../Container";
import { motion } from "framer-motion";

export function Header() {
    return (
        <motion.header className="flex w-full m-w-[1200px] h-20 bg-white border-b-[1px] drop-shadow-md fixed z-50 justify-between items-center"
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
        >
            <Container>
                <div className="flex flex-1  justify-between">
                    <div className="flex items-center gap-7">
                        <Image className="w-[150px] h-[19px]"
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className="flex items-center gap-7 text-primary-gray">
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
                    <div className="flex gap-7">
                      <Search />
                    <div className="text-primary-gray text-sm leading-relaxed">
                        Fale Conosco
                        <br />
                        <span>
                            <a className="text-primary-blue"
                            href="" target="_blank">WhatsApp</a>
                        </span>
                    </div>
                    <div className="flex mr-5 items-center">
                        <Button
                            name="Entrar"
                        />
                    </div>
                    </div>
                </div>
            </Container>
            
        </motion.header>
    )
}