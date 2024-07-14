import React from "react"
import Logo from "@/assets/Logo.svg"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./NavLinks"
import { Search } from "./Search"
import { Button } from "./Button"



export function Navbar() {
    return (
        <nav className="bg-white h-20 border-b-[1px] drop-shadow-lg px-10 m-auto " >
            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                        <Image src={Logo} alt="Logo" className="md:cursor-pointer h-9"/>
                    <ul className="flex items-center gap-8 ">
                        <li className="flex gap-8">
                            
                                
                        <NavLinks />
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
        </nav>
    )
}