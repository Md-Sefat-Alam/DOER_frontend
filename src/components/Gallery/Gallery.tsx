"use client";
import { IGalleryData } from "@/types/gallery";
import { useEffect, useState } from "react";
import MasonryLayout from "../common/MasonryLayout";
import Title from "../common/Title";

type Props = {};

export default function Gallery({}: Props) {
  const [galleryData, setGalleryData] = useState<IGalleryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="gallery" className="">
      <div className="container mx-auto py-10">
        <Title title="অগ্রণী দুয়ার গ্যালারী" />
        <MasonryLayout imageData={galleryData} setImageData={setGalleryData} />
      </div>
    </div>
  );
}
