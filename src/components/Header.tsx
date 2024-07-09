import Image from "next/image";
import { ItemMenu } from "./ItemMenu";

import Logo from '@/assets/Logo.svg';
import { Search } from "./Search";
import { Button } from "./Button";
import { Container } from "./Container";

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-white border-b-[1px] drop-shadow-sm fixed">
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-7">
                        <Image className="w-[150px] h-[19px]"
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className="flex items-center gap-7">
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
                            <li>
                                <ItemMenu
                                    name="Planos"
                                />
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
        </header>
    )
}