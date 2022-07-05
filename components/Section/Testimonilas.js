import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../../images/avatar.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../styles/testimonials.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function testimonials() {
  return (
    <>
      <div className="testimonials">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testi-box">
              <img src={Avatar} />
              <h4>Mozuku-chan</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                aperiam debitis saepe aliquam, numquam impedit suscipit dolor
                repellendus dolorem repudiandae!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-box">
              <img src={Avatar} />
              <h4>Mozuku-chan</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                aperiam debitis saepe aliquam, numquam impedit suscipit dolor
                repellendus dolorem repudiandae!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-box">
              <img src={Avatar} />
              <h4>Mozuku-chan</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                aperiam debitis saepe aliquam, numquam impedit suscipit dolor
                repellendus dolorem repudiandae!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
