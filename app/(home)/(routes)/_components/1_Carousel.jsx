import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
// SwiperCore.use([Autoplay, Pagination]);

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // autoplay={{ delay: 1500 }} // Đặt thời gian tự động chạy là 1,5 giây (1500 mili giây)
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/Home_first.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/CICC_1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/CICC_2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/MCC_1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/MCC_2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/UCW_1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/UCW_2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/UFV_1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            fill
            alt="Info School"
            className="cursor-pointer"
            src="/UFV_2.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
