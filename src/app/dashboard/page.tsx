import Title from "@/components/common/Title";
import DashboardGallery from "@/components/Dashboard/DashboardGallery/DashboardGallery";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className=" min-h-screen bg-gray-300 pt-[120px]">
      <div className="container mx-auto">
        <Title title="অগ্রণী দুয়ার গ্যালারী পরিবর্তন করুন" />
        <DashboardGallery />
      </div>
    </div>
  );
}
