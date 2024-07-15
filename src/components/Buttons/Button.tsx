import Image from "next/image";

import Arrow from '@/assets/arrow-down.svg'

type Props = {
    name: string
}

export function Button({ name } : Props) {
    return (
        <button className="flex w-[121px] h-[40px]  justify-center items-center gap-1 bg-primary-blue rounded  shadow-[inset_-12px_-8px_40px_#0000004b]">
        <span className=" text-white text-sm">{name}</span>
        <svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#fff" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"></polyline></svg>
        </button>
    )
}