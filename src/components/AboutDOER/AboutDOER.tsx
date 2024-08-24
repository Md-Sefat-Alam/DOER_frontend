import React from "react";
import Title from "../common/Title";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type Props = {};

export default function AboutDOER({}: Props) {
  const t = useTranslations("home_about_doer");
  const common = useTranslations("common");
  return (
    <div id="services" className="py-16 container mx-auto xl:px-0 px-4">
      <Title title={t("about_doer_title")} />
      <blockquote
        className="text-lg text-justify py-4"
        cite="https://agranidoer.com"
      >
        {t("about_doer_des")}
        <Link className="text-blue-400" href={"/#"}>
          {' '}{common("more")}...
        </Link>
      </blockquote>
      <div className="flex justify-end">
        <button className="block bg-blue-950 text-white p-5 font-bold rounded-md lg:text-5xl md:text-3xl text-xl">
          {t("apply_for_agent")}
        </button>
      </div>
    </div>
  );
}
