import Image from "next/image"

import Publicidade from "@/assets/carousel2/publi-market-slide.png"
import Consultoria from "@/assets/carousel2/consultoria-slide.png"
import Saude from "@/assets/carousel2/saude-slide.png"
import Cursos from "@/assets/carousel2/cursos-slide.png"
import Construcao from "@/assets/carousel2/construcao-slide.png"
import Instalacao from "@/assets/carousel2/publi-market-slide.png"
import Tecnologia from "@/assets/carousel2/ti-slide.png"
import Software from "@/assets/carousel2/software-slide.png"
import Comercio from "@/assets/carousel2/varejista-slide.png"
import Distrubuir from "@/assets/carousel2/atacadista-slide.png"


export function CarouselSegmentos (){
    return (
        
            <div className="flex w-full  relative gap-10 overflow-scroll">
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
                <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0">
                        <a href="">
                            <Image 
                                src={Publicidade}
                                alt="Foto publicidade"
                                className="w-[100%] h-[100%]"
                            />
                        </a>
                        <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
                </figure>
            </div>
        
    )
}