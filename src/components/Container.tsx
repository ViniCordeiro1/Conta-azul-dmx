import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

export function Container({ children} : Props) {
    return (
        <div className="flex w-full justify-center mx-auto ">
            {children}
        </div>
    )
}