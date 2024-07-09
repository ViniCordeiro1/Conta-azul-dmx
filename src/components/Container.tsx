import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

export function Container({ children} : Props) {
    return (
        <div className="flex flex-1 items-center justify-between w-full  px-[160px] mx-auto ">
            {children}
        </div>
    )
}