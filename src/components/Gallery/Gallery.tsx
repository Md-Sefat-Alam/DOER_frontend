import React from "react";
import Title from "../common/Title";
import MasonryLayout from "../common/MasonryLayout";

type Props = {};

const images = [
  "/assets/slider/80days.jpg",
  "/assets/slider/fingure.JPG",
  "/assets/services/balance.png",
  "/assets/slider/training.JPG",
  "/assets/slider/training.JPG",
  "/assets/slider/80days.jpg",
  "/assets/services/balance.png",
  "/assets/services/cash deposit.png",
  "/assets/services/online.png",
];

export default function Gallery({}: Props) {
  return (
    <div className="">
      <div className="container mx-auto py-10">
        <Title title="অগ্রণী দুয়ার গ্যালারী" />
        <div className="flex gap-4 py-3 justify-center">
          <button className="border rounded-md bg-gray-400/50 p-2 hover:bg-gray-400/50">
            সকল ছবি
          </button>
          <button className="border rounded-md p-2 hover:bg-gray-400/50">
            প্রশিক্ষণ
          </button>
          <button className="border rounded-md p-2 hover:bg-gray-400/50">
            এজেন্ট শাখায় লেনদেন
          </button>
        </div>
        <div className="py-5">
          <div className="">
            <MasonryLayout images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
