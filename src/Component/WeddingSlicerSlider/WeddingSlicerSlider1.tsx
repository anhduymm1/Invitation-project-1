// WeddingSlicerSwiper.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './WeddingSlicerSlider.scss'

import { GiHeartEarrings } from "react-icons/gi";
const slides = [
    {
        id: 1,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/736x/c6/ac/ca/c6accad04eeecd77dfaeff3e891da5d0.jpg",
    },
    {
        id: 2,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/736x/44/64/26/446426a53bdeb0bfb88f46d04b5a3e4d.jpg",
    },
    {
        id: 3,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/474x/84/4d/32/844d3225bed8d7ffc1a380a8e5f01df9.jpg",
    },
    {
        id: 4,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/474x/ae/60/8c/ae608cf5ade1f1c4b6a156431c40c69c.jpg",
    },
     {
        id: 5,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/736x/87/f7/c2/87f7c269e8372bfb82e6b08afdd0bb4e.jpg",
    },

];

export default function WeddingSlicerSlider1() {

    return (
        <>
            <div className='countdown-box-line-container'>
                <hr className='line' />
                <GiHeartEarrings fontSize={"70px"} color='#6b4b4b' />
                <hr className='line' />
            </div>
          
            <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="wp-slider-outer">
                <Swiper
                    modules={[Parallax, Autoplay, Pagination]}
                    speed={1100}
                    parallax={true}
                    autoplay={{ delay: 4200, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="wp-swiper"
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2 },
                    }}
                    centeredSlides={false}

                >
                    <div slot="container-start" className="wp-parallax-bg" data-swiper-parallax="-20%"></div>

                    {slides.map((s) => (
                        <SwiperSlide key={s.id}>
                            <div className="wp-slide">
                                <div className="wp-imgwrap" data-swiper-parallax="-5">
                                    <img className="wp-img" src={s.img} alt={s.title} />
                                </div>
                                <div className="wp-caption" data-swiper-parallax="0">
                                    <h2 className="wp-title">{s.title}</h2>
                                    <p className="wp-sub">{s.subtitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}