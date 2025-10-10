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

import FilmCard from "./FilmCard";
type Film = {
  id: number;
  name: string;
  pic: string;
  rate: number;
  year: number;
};

export default function FilmSlider({ data }: { data: Film[] }) {
  return (
    <Swiper
      className="my-7 w-[79%] "
      modules={[Scrollbar, Autoplay, Keyboard, EffectCoverflow, A11y]}
      breakpoints={{
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: true,
        },
        1280: {
          slidesPerView: 5,
          centeredSlides: true,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 35,
          centeredSlides: true,
        },
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      keyboard={{ enabled: true }}
      loopAdditionalSlides={2}
      grabCursor={true}
      speed={1400}
      initialSlide={5}
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
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <FilmCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
