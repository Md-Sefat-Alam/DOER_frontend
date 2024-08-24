"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { ISliderData } from "@/types/hero";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderBody from "./SliderBody";
import { useTranslations } from "next-intl";

type Props = {};

export default function Hero({}: Props) {
  const t = useTranslations("home_hero");
  const sliderData: ISliderData[] = [
    {
      id: 1,
      title: t("_80days"),
      description: t("_80days_des"),
      ImgUrl: "/assets/slider/80days.jpg",
    },
    {
      id: 2,
      title: t("_training"),
      description: t("_training_des"),
      ImgUrl: "/assets/slider/training.JPG",
    },
    {
      id: 3,
      title: t("_money_widow"),
      description: t("_money_widow_des"),
      ImgUrl: "/assets/slider/fingure.JPG",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {sliderData.map((item) => (
        <SwiperSlide key={item.id}>
          <SliderBody item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
