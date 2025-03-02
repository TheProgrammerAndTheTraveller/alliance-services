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
import dptekLogo from "../../../public/images/dptek_logo.png"
import ok from "../../../public/images/ok.png"
import ok2 from "../../../public/images/ok2.png"
import altaoyok from "../../../public/images/altayok.png"


const images = [
    {img: vsolLogo, alt:"V-SOL"},
    {img: comfastLogo, alt:"Comfast"},
    {img: comwayLogo, alt:"Comway"},
    {img: dptekLogo, alt:"DPTek"},
    {img: ok, alt:"Okent"},
    {img: ok2, alt:"Oknet"},
    {img: altaoyok, alt:"АлтайОптикаКабель"},
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
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                        />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default BrandSlider;