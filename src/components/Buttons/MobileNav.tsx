'use client'

import { motion } from "framer-motion";


export function MobileNav () {

    const close = () => {
        window.dispatchEvent(new CustomEvent('close'));
      };

    return (


        <motion.div className="h-[100vh] w-[100vw] absolute right-1 top-1 z-[60] p-[5px] bg-blue-400 bg-opacity-90"
        initial={{ right: -100}}
        animate={{ right: 0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="absolute right-1 top-1 z-[61] p-[5px]" onClick={close}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#666666" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className=""
                >
                <ul className={`
                        lg:hidden bg-white absolute z-[60] top-0 right-0 h-[100vh] sm:w-[350px] w-[270px] bottom-0 flex flex-col text-center items-center p-[30px]
                    `}>
                    <li className="p-[10px] sm:w-[290px] w-[240px] h-[41px] text-black">
                        <a href="">Funcionalidades</a>
                    </li>
                    <li className="p-[10px] mt-[5px] sm:w-[290px] w-[240px] h-[41px] text-black border-t-[1px] border-gray-300 ">
                        <a href="">Segmentos</a>
                    
                    </li>
                    <li className="p-[10px] mt-[5px] sm:w-[290px] w-[240px] text-black border-t-[1px] border-gray-300">
                        <a href="">Planos</a>
                    </li>
                    <li className="p-[10px] mt-[5px] sm:w-[290px] w-[240px] text-black border-t-[1px] border-gray-300">
                        <a href="">Parceiros</a>
                    </li>
                    <div className="flex items-center w-[230px] h-10 border-[1px] border-gray-300 rounded-md mt-[500px]">
                    <span className="pl-2"><svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#666" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#666" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg></span>
                        <input className="w-[190px] h-[38px] pl-[10px]" type="Buscar" placeholder="Bsucar" />
                    </div>
                    <div className="mt-[30px]">
                        <ul className="flex justify-center sm:mb-[30px] md:mb-0">

                        <motion.li className=""
                        initial={{ opacity: 0, x: -30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}>
                            <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                            <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                            </svg></a>
                        </motion.li>

                        <motion.li className="pl-[30px]"
                        initial={{ opacity: 0, x: -30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        >
                            <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                            <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                            <circle cx="14.87" cy="5.26" r="1.09"></circle>
                            <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                            </svg></a>
                        </motion.li>

                        <motion.li className="pl-[30px]"
                        initial={{ opacity: 0, x: -30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        >
                            <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                            <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                            <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
                            </svg></a>
                        </motion.li>

                        <motion.li className="pl-[30px]"
                        initial={{ opacity: 0, x: -30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 200, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        >
                            <a href="" ><svg width="20" height="20" viewBox="0 0 20 20" className="fill-second-gray hover:fill-primary-blue hover:scale-150 duration-300">
                            <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path>
                            </svg></a>
                        </motion.li>
                        </ul>
                    </div>
                </ul>
            </div>
        </motion.div>
    )
}