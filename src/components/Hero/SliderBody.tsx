import { ISliderData } from "@/types/hero";

type Props = { item: ISliderData };

export default function SliderBody({ item }: Props) {
  return (
    <div
      className={`h-screen bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url('${item.ImgUrl}')` }}
    >
      {item.title ? (
        <div className="flex flex-col justify-end gap-4 items-center w-full h-full">
          <h1 className="text-5xl font-bold text-white py-3 bg-gray-500/50 px-4 rounded-xl">
            {item.title}
          </h1>
          <p className="mb-10 text-gray-200 shadow-2xl py-3 bg-gray-500/50 px-4 rounded md:max-w-[70%] max-w-[100%]">
            {item.description}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
