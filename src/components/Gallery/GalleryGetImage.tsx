"use client";
import { useGalleryEditContext } from "@/context/Gallery/GalleryEditContext";
import { IGalleryData } from "@/types/gallery";
import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  item: IGalleryData;
  setImageData?: Dispatch<SetStateAction<IGalleryData[]>>;
  isDashboard?: boolean;
}

export default memo(function GalleryGetImage({
  item,
  isDashboard,
  setImageData,
}: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setData, updateState } = useGalleryEditContext();

  console.log({ updateState });

  useEffect(() => {
    setIsLoading(true);
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/gallery/image/${item._id}`
        );
        const data = await response.json();
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching the image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [item?._id, updateState === item?._id]);

  return (
    <div className="transition relative overflow-hidden flex">
      {isLoading ? (
        <img
          src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"
          alt="Loading..."
        />
      ) : (
        <img
          className="w-full cursor-pointer"
          src={`data:image/jpeg;base64,${image}`}
          alt={item?.title || "Gallery Image"}
        />
      )}

      <div className="cursor-pointer bg-gray-600/50 opacity-0 hover:opacity-100  absolute bottom-0 left-0 w-full h-full flex flex-col p-3 items-center justify-center transition-all">
        <h2 className="text-2xl font-bold text-white">{item?.title}</h2>
        <h2 className="py-3 text-white">
          {item?.description.slice(0, 50) + "..."}
        </h2>
        {isDashboard && (
          <div className="flex gap-4">
            <MdEdit
              onClick={() => {
                setData(item._id, true);
              }}
              className="text-4xl text-white hover:-translate-y-1 transition-all cursor-pointer bg-blue-500 p-1 rounded-full"
            />
            <MdDeleteOutline
              onClick={async () => {
                if (
                  window.confirm("Are you sure you want to delete this item?")
                ) {
                  try {
                    setIsLoading(true);
                    const deleteResponse = await fetch(
                      `http://localhost:5000/gallery/${item._id}`,
                      {
                        method: "DELETE",
                      }
                    );
                    const deleteData = await deleteResponse.json();
                    console.log(deleteData);
                    if (deleteData.deletedCount > 0) {
                      toast("Successfully Deleted", { type: "success" });
                      setImageData &&
                        setImageData((prev) =>
                          prev.filter((prevData) => prevData._id !== item._id)
                        );
                    }
                  } catch (error) {
                    console.error("Error deleting the item:", error);
                  } finally {
                    setIsLoading(false);
                  }
                }
              }}
              className="text-4xl text-white hover:-translate-y-1 transition-all cursor-pointer bg-red-500 p-1 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
});
