// components/ImageSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/images/image1.jpg" alt="Image 1" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image2.jpg" alt="Image 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image3.jpg" alt="Image 3" className="w-full h-auto" />
      </SwiperSlide>
      {/* Adicione mais slides conforme necessário */}
    </Swiper>
  );
};

export default ImageSlider;
