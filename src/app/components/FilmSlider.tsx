"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Scrollbar,
  Keyboard,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

export default function FilmSlider({ cards }: { cards: React.ReactElement[] }) {
  return (
    <Swiper
      className="my-7 w-[79%]"
      modules={[Scrollbar, Autoplay, Keyboard, EffectCoverflow, A11y]}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        500: {
          spaceBetween: 35,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 35,
          slidesPerView: 4,
        },
        1024: {
          spaceBetween: 40,
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 35,
        },
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      centeredSlides={true}
      keyboard={{ enabled: true }}
      loopAdditionalSlides={4}
      grabCursor={true}
      speed={1400}
      initialSlide={3}
      touchRatio={1.3}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 20,
        depth: 170,
        modifier: 0.7,
        slideShadows: true,
      }}
      simulateTouch={true}
      // loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {cards.map((card, i) => (
        <SwiperSlide key={i}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}
