import Image from "next/image";

import Logo from '@/assets/Logo.svg';
import { ItemMenu } from "./ItemMenu";

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-white">
            <div className="w-full max-w-[1200] px-[90px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className="flex items-center gap-12">
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
                </div>
            </div>
        </header>
    )
}