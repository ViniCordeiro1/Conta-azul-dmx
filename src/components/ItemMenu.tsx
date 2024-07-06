import Image from "next/image";

import Arrow from '@/assets/arrow-down.svg'

type Props = {
    name: string
}

export function ItemMenu ({ name } : Props){
    return (
        <ul>
        <li>
            <button className="flex items-center gap-1">
                <span className="text-primary-gray text-sm">{name}</span>
                <Image 
                src={Arrow}
                alt="arrow dropdown"/>
            </button>
        </li>
    </ul>
    )
}