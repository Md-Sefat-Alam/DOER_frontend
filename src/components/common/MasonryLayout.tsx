import { IGalleryData } from "@/types/gallery";
import React, { Dispatch, SetStateAction } from "react";
import GalleryGetImage from "../Gallery/GalleryGetImage";

const MasonryLayout = ({
  imageData,
  isDashboard,
  setImageData
}: {
  imageData: IGalleryData[];
  setImageData: Dispatch<SetStateAction<IGalleryData[]>>;
  isDashboard?: boolean;
}) => {
  return (
    <div className="masonry-grid">
      {imageData.map((item) => (
        <div key={item._id} className="masonry-item overflow-hidden">
          <GalleryGetImage item={item} isDashboard={isDashboard} setImageData={setImageData} />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
