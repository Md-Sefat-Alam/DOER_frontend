import React from "react";
import Title from "../common/Title";
import { ISpecialWorks } from "@/types/specialWorks";
import Card from "../common/Card";
import { useTranslations } from "next-intl";

type Props = {};

export default function SpecialWorks({}: Props) {
  const tr = useTranslations("home_our_works");
  return (
    <div id="special_works" className="bg-gray-100/65">
      <div className="container mx-auto py-16 xl:px-0 px-4">
        <Title title={tr("our_works_title")} />
        <div className="grid lg:grid-cols-3 py-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
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
