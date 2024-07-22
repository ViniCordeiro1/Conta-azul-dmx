'use client'

// components/ImageSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import Publicidade from "@/assets/carousel2/publi-market-slide.png"
import Consultoria from "@/assets/carousel2/consultoria-slide.png"
import Saude from "@/assets/carousel2/saude-slide.png"
import Cursos from "@/assets/carousel2/cursos-slide.png"
import Construcao from "@/assets/carousel2/construcao-slide.png"
import Instalacao from "@/assets/carousel2/manutencao-slide.png"
import Tecnologia from "@/assets/carousel2/ti-slide.png"
import Software from "@/assets/carousel2/software-slide.png"
import Comercio from "@/assets/carousel2/varejista-slide.png"
import Distrubuidor from "@/assets/carousel2/atacadista-slide.png"


const ImageSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-[1200px]'
    >
      <SwiperSlide>
      <div className="flex relative lg:gap-10 gap-2 hover:scale-105 transition-[400] ">
        <figure className="relative cursor-pointer flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Publicidade}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Publicidade e <br/> Marketing</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Consultoria}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0  absolute bottom-0 left-0">Consultoria</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Saude}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0  absolute bottom-0 left-0">Saúde</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Cursos}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Cursos e <br/> Treinamento</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Construcao}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Construção, Engenharia e Arquitetura</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Instalacao}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Instalação e Manutenção</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Tecnologia}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Tecnologia da Informação</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Software}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Software</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Comercio}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Comércio Varejista</figcaption>
        </figure>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex w-full  relative gap-10 hover:scale-105 transition-[400]">
        <figure className="relative cursor-pointer rounded-[5px] flex-shrink-0 w-[218px]">
            <a href="">
                <Image 
                src={Distrubuidor}
                alt="Foto publicidade"
                className="w-[100%] h-[100%] rounded-[5px]"
              />
            </a>
            <figcaption className="flex w-[100%] h-[100%] text-center justify-center p-[30px] items-end text-[14px] font-semibold leading-[19.6px] text-white bg-gradient-to-t from-blue-400 m-0 absolute bottom-0 left-0">Distribuidor Atacadista</figcaption>
        </figure>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
