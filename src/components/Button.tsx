import Image from "next/image";

import Arrow from '@/assets/arrow-down.svg'

type Props = {
    name: string
}

export function Button({ name } : Props) {
    return (
        <button className="flex w-[121px] h-[40px]  justify-center items-center gap-1 bg-primary-blue rounded">
        <span className=" text-white text-sm">{name}</span>

        <Image className=""
        src={Arrow}
        alt="arrow dropdown"/>
        
        </button>
    )
}