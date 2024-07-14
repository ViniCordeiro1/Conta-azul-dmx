import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

export function Container({ children} : Props) {
    return (
        <div className="flex flex-1 w-full  sm:px[16px] lg:px-[30px] xl:px-[160px] mx-auto ">
            {children}
        </div>
    )
}