import { useState, useEffect } from "react"
import { MobileNav } from "./MobileNav"

export function ButtonMenu () {

    const [open, setOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('close', () => setOpen(false));
      }, []);

    return (
        <>
        <button className="flex  gap-2 text-second-gray items-center"  onClick={()=>setOpen(!open)}>
            <span className="ml-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#666666" className="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </span>
            Menu
        </button>
        {open ? (
            <MobileNav />
          ):
          ("")}
        </>
    )
}