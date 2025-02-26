"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./BrandSlider.scss";
import { EffectCoverflow, Pagination } from 'swiper/modules';



const BrandSlider = () => {
    return (
        <>
            <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={'auto'}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 0,
                }}
                speed={3000}

                // coverflowEffect={{
                //     rotate: 50,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows: true,
                // }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/vsollogo.webp" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/Comfast-Logo-1.jpg" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/comway-logo.png" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/big-188383-1.png" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/dptek_logo.png" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/ok.png" alt="Brand Logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/ok2.png" alt="Brand Logo" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BrandSlider;