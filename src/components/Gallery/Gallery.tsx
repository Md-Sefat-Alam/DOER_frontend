"use client";
import { IGalleryData } from "@/types/gallery";
import { useEffect, useState } from "react";
import MasonryLayout from "../common/MasonryLayout";
import Title from "../common/Title";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslations } from "next-intl";

type Props = {};

export default function Gallery({}: Props) {
  const tr = useTranslations('home_gallery')
  const [galleryData, setGalleryData] = useState<IGalleryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://agrani-doer-backend-ro9fiezz5-mdsefatalams-projects.vercel.app/gallery"
    )
      .then((res) => res.json())
      .then((data) => setGalleryData(data))
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div id="gallery" className="">
      <div className="container mx-auto py-10 xl:px-0 px-4">
        <Title title={tr('gallery_title')} />
        {isLoading ? (
          <div className="min-h-[500px] flex justify-center items-center">
            <AiOutlineLoading3Quarters className="animate-spin text-5xl text-red-400 font-bold" />
          </div>
        ) : (
          <MasonryLayout
            imageData={galleryData}
            setImageData={setGalleryData}
          />
        )}
      </div>
    </div>
  );
}
