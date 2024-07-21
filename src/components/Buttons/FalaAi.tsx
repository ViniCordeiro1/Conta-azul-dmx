import Image from "next/image"

import Coracao from "@/assets/img/purple-logo.svg"

export function BFalaAi () {
    return (
        <div className="fixed z-50 lg:-right-8 md:right-36 sm:-left-8 -left-8 top-1/2">
            <button className="flex w-[102px] h-[44px] p-[10px] gap-1 items-center justify-center rounded-md -rotate-90 bg-white shadow-[-6px_0px_35px_7px_#b3bcc5]">
                <div className="flex w-[24px] h-[21px]">
                    <Image 
                     src={Coracao}
                     alt="Logo coracao"
                     className="rotate-90"
                    />
                </div>
                    <p className="text-[14.5px] text-second-gray">Fala ai</p>
            </button>
        </div>
    )
}