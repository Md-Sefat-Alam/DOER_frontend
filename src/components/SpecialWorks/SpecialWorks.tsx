import React from "react";
import Title from "../common/Title";
import { ISpecialWorks } from "@/types/specialWorks";
import Card from "../common/Card";

type Props = {};

export default function SpecialWorks({}: Props) {
  return (
    <div id='special_works' className="bg-gray-100/65">
      <div className="container mx-auto py-8">
        <Title title="বিশেষ কর্মসূচী" />
        <div className="grid grid-cols-3 gap-10">
          {specialWorks.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const specialWorks: ISpecialWorks[] = [
  {
    id: 1,
    title: "৮০ দিনের কর্মসূচী এর পুরষ্কার বিতরনি অনুষ্ঠান",
    description:
      "৮০ দিনের বিশেষ কর্মসূচী উপলক্ষে অগ্রণী দুয়ার ব্যাংকিং - এর লক্ষমাত্রা শতভাগ পূরণে দুয়ার কর্তৃক পুরষ্কার ঘোষণা করা হয়। এই কর্মসূচিতে পারফরম্যান্স অর্জন বিবেচনায় প্রথম স্থান দখল করে বালিয়াঘাট্টা বাজার এজেন্ট ব্যাকিং শাখা, গোদাগাড়ী,রাজশাহী।",
    link: "/#",
    imgUrl: "/assets/slider/80days.jpg",
  },
  {
    id: 2,
    title: "৮০ দিনের কর্মসূচী এর পুরষ্কার বিতরনি অনুষ্ঠান",
    description:
      "৮০ দিনের বিশেষ কর্মসূচী উপলক্ষে অগ্রণী দুয়ার ব্যাংকিং - এর লক্ষমাত্রা শতভাগ পূরণে দুয়ার কর্তৃক পুরষ্কার ঘোষণা করা হয়। এই কর্মসূচিতে পারফরম্যান্স অর্জন বিবেচনায় প্রথম স্থান দখল করে বালিয়াঘাট্টা বাজার এজেন্ট ব্যাকিং শাখা, গোদাগাড়ী,রাজশাহী।",
    link: "/#",
    imgUrl: "/assets/slider/80days.jpg",
  },
  {
    id: 3,
    title: "৮০ দিনের কর্মসূচী এর পুরষ্কার বিতরনি অনুষ্ঠান",
    description:
      "৮০ দিনের বিশেষ কর্মসূচী উপলক্ষে অগ্রণী দুয়ার ব্যাংকিং - এর লক্ষমাত্রা শতভাগ পূরণে দুয়ার কর্তৃক পুরষ্কার ঘোষণা করা হয়। এই কর্মসূচিতে পারফরম্যান্স অর্জন বিবেচনায় প্রথম স্থান দখল করে বালিয়াঘাট্টা বাজার এজেন্ট ব্যাকিং শাখা, গোদাগাড়ী,রাজশাহী।",
    link: "/#",
    imgUrl: "/assets/slider/80days.jpg",
  },
];
