import { IOurServices } from "@/types/ourService";
import Image from "next/image";
import React from "react";

type Props = { item: IOurServices };

export default function Service({ item }: Props) {
  return (
    <div className="flex gap-4 justify-start items-center font-bold p-6 shadow-lg bg-white rounded">
      <Image
        className="rounded-full w-[50px]"
        alt={item.title}
        src={item.icon}
        height={80}
        width={80}
      />
      <h4>{item.title}</h4>
    </div>
  );
}
