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
      className="my-6 w-[80%]"
      modules={[Scrollbar, Autoplay, Keyboard, EffectCoverflow, A11y]}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 7,
          spaceBetween: 45,
        },
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      keyboard={{ enabled: true }}
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
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <FilmCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
