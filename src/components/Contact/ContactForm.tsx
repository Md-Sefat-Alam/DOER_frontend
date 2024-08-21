import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="w-[60%]">
      <form action="" method="post" className="flex flex-col gap-3">
        <div className="flex gap-4">
          <input className="w-full rounded border p-2 focus:outline-red-400" type="text" placeholder="আপনার নাম..." />
          <input className="w-full rounded border p-2 focus:outline-red-400" type="text" placeholder="আপনার ইমেইল..." />
        </div>
        <input className="w-full rounded border p-2 focus:outline-red-400" type="text" placeholder="বিষয় বস্তু..." />
        <textarea className="w-full rounded border p-2 focus:outline-red-400" placeholder="আপনার বার্তা..." />
        <input className="w-[120px] cursor-pointer mt-4 bg-red-500 py-2 font-bold text-white rounded-md" type="button" value="বার্তা পাঠান" />
      </form>
    </div>
  );
}
