import React from "react";

type Props = { title: string };

export default function Title({ title }: Props) {
  return (
    <div className="py-4 flex gap-4">
      <span className="before:block before:absolute before:-inset-2 before:skew-y-12 before:bg-blue-400 relative inline-block">
        <span className="relative text-white"></span>
      </span>
      <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
    </div>
  );
}
