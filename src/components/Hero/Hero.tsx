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

type Props = {};

export default function Hero({}: Props) {
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

const sliderData: ISliderData[] = [
  {
    id: 1,
    title: "৮০ দিনের কর্মসূচী এর পুরষ্কার বিতরনি অনুষ্ঠান",
    description:
      "৮০ দিনের বিশেষ কর্মসূচী উপলক্ষে অগ্রণী দুয়ার ব্যাংকিং - এর লক্ষমাত্রা শতভাগ পূরণে দুয়ার কর্তৃক পুরষ্কার ঘোষণা করা হয়। এই কর্মসূচিতে পারফরম্যান্স অর্জন বিবেচনায় প্রথম স্থান দখল করে বালিয়াঘাট্টা বাজার এজেন্ট ব্যাকিং শাখা, গোদাগাড়ী,রাজশাহী।",
    ImgUrl: "/assets/slider/80days.jpg",
  },
  {
    id: 2,
    title: "অগ্রণী দুয়ার ব্যাংকিং প্রশিক্ষণ কর্মশালা",
    description: "অগ্রণী দুয়ার ব্যাংকিং এর প্রশিক্ষেনে উপস্থিত এজেন্টগণ",
    ImgUrl: "/assets/slider/training.JPG",
  },
  {
    id: 3,
    title: "অগ্রণী দুয়ার ব্যাংকিং শাখায় - গ্রাহকের টাকা উত্তোলন।",
    description:
      "অগ্রণী দুয়ার ব্যাংকিং শাখায় - একজন গ্রাহক আঙ্গুলের ছাপ দিয়ে টাকা উত্তোলন করছেন।",
    ImgUrl: "/assets/slider/fingure.JPG",
  },
];
