'use client';


import { useState, useEffect } from 'react';
import Image from 'next/image';

import contasPAgar from "@/assets/carousel1/contasPagar.png"

interface ImageData {
  url: string;
  text: string;
  width: number;
  height: number;
}

const images: ImageData[] = [
  { url: '/https://images.unsplash.com/photo-1640955011254-39734e60b16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Texto 1', width: 800, height: 600 },
  { url: '/image2.jpg', text: 'Texto 2', width: 800, height: 600 },
  { url: '/image3.jpg', text: 'Texto 3', width: 800, height: 600 },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Ajuste o tempo para a transição
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // Ajuste o tempo para a transição
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
          >
            <Image
              src={image.url}
              alt={image.text}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4">
              <h2>{image.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50">
        Next
      </button>
    </div>
  );
};

export default Carousel;
