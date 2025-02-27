"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import React from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./BrandSlider.scss";

import vsolLogo from "../../../public/images/vsollogo.png"
import comfastLogo from "../../../public/images/Comfast-Logo-1.png"
import comwayLogo from "../../../public/images/comway-logo.png"
import big from "../../../public/images/big-188383-1.png"
import dptekLogo from "../../../public/images/dptek_logo.png"
import ok from "../../../public/images/ok.png"
import ok2 from "../../../public/images/ok2.png"


const images = [
    {img: vsolLogo, alt:"vsolLogo"},
    {img: comfastLogo, alt:"comfastLogo"},
    {img: comwayLogo, alt:"comwayLogo"},
    {img: big, alt:"big"},
    {img: dptekLogo, alt:"dptekLogo"},
    {img: ok, alt:"ok"},
    {img: ok2, alt:"ok2"},
]

const BrandSlider = () => {
    return (
        <>
            <Swiper
                grabCursor={false}
                centeredSlides={false}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                speed={3000}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                {images.map((image, i) => 
                <SwiperSlide key={i}>
                    <Image 
                        src={image.img}
                        alt={image.alt} 
                        />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default BrandSlider;