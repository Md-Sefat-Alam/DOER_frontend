import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  const tr = useTranslations("home_contact");
  return (
    <div className="md:w-[60%] w-full md:mt-0 mt-10">
      <form action="" method="post" className="flex flex-col gap-3">
        <div className="flex gap-4 sm:flex-row flex-col">
          <input
            className="w-full rounded border p-2 focus:outline-red-400"
            type="text"
            placeholder={tr("your_name") + "..."}
          />
          <input
            className="w-full rounded border p-2 focus:outline-red-400"
            type="text"
            placeholder={tr("your_email") + "..."}
          />
        </div>
        <input
          className="w-full rounded border p-2 focus:outline-red-400"
          type="text"
          placeholder={tr("subjects") + "..."}
        />
        <textarea
          className="w-full rounded border p-2 focus:outline-red-400"
          placeholder={tr("your_text") + "..."}
        />
        <input
          className="w-[120px] cursor-pointer mt-4 bg-red-500 py-2 font-bold text-white rounded-md"
          type="button"
          value={tr("send")}
        />
      </form>
    </div>
  );
}
