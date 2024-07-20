'use client'


export function MobileNav () {

    const close = () => {
        window.dispatchEvent(new CustomEvent('close'));
      };

    return (


        <div className="h-[100vh] w-[400px] absolute right-1 top-1 z-[60] p-[5px] bg-white">
            <div className="absolute right-1 top-1 z-[61] p-[5px]" onClick={close}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#666666" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <ul className={`
                    lg:hidden bg-white absolute z-[60] top-0 right-0 w-[350px] h-[600px] bottom-0 flex flex-col text-center items-center p-[30px]
                `}>
                <li className="p-[10px] w-[290px] h-[41px]">
                    <a href="">Funcionalidades</a>
                </li>
                <li className="p-[10px] w-[290px] h-[41px] border-t-[1px] border-gray-300 ">
                    <a href="">Segmentos</a>
                
                </li>
                <li className="p-[10px] w-[290px] h-[41px] border-t-[1px] border-gray-300">
                    <a href="">Planos</a>
                </li>
                <li className="p-[10px] w-[290px] h-[41px] border-t-[1px] border-gray-300">
                    <a href="">Parceiros</a>
                </li>
            </ul>
        </div>
    )
}