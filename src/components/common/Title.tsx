import React from "react";

type Props = { title: string; color?: string; isReverse?: boolean };

export default function Title({ title, color, isReverse }: Props) {
  return (
    <div className={`py-4 flex ${isReverse ? "flex-row-reverse" : ""} gap-4`}>
      <span className="before:block before:absolute before:-inset-2 before:skew-y-12 before:bg-red-600 relative inline-block">
        <span className="relative text-white"></span>
      </span>
      <h1 className={`text-2xl font-bold ${color ? color : "text-blue-950"}`}>
        {title}
      </h1>
    </div>
  );
}
