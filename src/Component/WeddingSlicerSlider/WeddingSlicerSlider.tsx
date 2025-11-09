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
        title: "Welcome to our wedding",
        subtitle: "Duy & Oanh — 18.12.2025",
        img: "https://i.pinimg.com/736x/a6/06/4b/a6064b92b0935c46e7b2f054b7002ca5.jpg",
    },
    {
        id: 2,
        title: "Ceremony",
        subtitle: "Family & Friends",
        img: "https://i.pinimg.com/736x/7c/72/0e/7c720e6a7a0b8210f9aaf6ee0ed45a98.jpg",
    },
    {
        id: 3,
        title: "Reception",
        subtitle: "Let’s celebrate!",
        img: "https://i.pinimg.com/736x/fd/89/f1/fd89f126584c548d6b19d35e5e41c096.jpg",
    },
    {
        id: 4,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/736x/d5/c6/af/d5c6af0f42524b6254fa923e5006e940.jpg",
    },
     {
        id: 5,
        title: "",
        subtitle: "",
        img: "https://i.pinimg.com/736x/08/08/70/0808705fdc28a6a3248a8163be40183c.jpg",
    },

];

export default function WeddingSlicerSlider() {

    return (
        <>
            <div className='countdown-box-line-container'>
                <hr className='line' />
                <GiHeartEarrings fontSize={"70px"} color='#6b4b4b' />
                <hr className='line' />
            </div>
            <h2 className="timeline-title"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >ALBUM</h2>
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