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
        <div className="py-5">
          <div className="container mx-auto">
            <MasonryLayout images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
