import React from "react";
import SocialIcon from "./SocialIcon";
import Title from "./Title";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type Props = {};

export default function Footer({}: Props) {
  const tr = useTranslations("footer");
  return (
    <div className="bg-gray-600">
      <div className="container mx-auto py-10 flex md:flex-row flex-col px-2 xl:px-0">
        <div className="md:w-[30%] w-full flex flex-col justify-center sm:items-start items-center">
          <div className="pb-10">
            <h1 className="text-3xl font-bold text-white pb-2">
              {tr("title")}
            </h1>
            <blockquote className="text-gray-400">{tr("slog")}</blockquote>
          </div>
          <div>
            <SocialIcon
              socialList={["facebook", "linkedin", "twitter"]}
              link={{ facebook: "https://www.facebook.com/agrani.doer" }}
            />
          </div>
        </div>
        <div className="md:w-[70%] w-full md:mt-0 mt-10 md:gap-0 gap-10 flex sm:flex-row flex-col sm:justify-between sm:items-start ">
          <div className="sm:self-auto self-end">
            <Title
              isReverse
              title={tr("about_agroni_doer")}
              color="text-white "
            />
            <ul className="md:pt-5 pt-2  text-right sm:text-left ">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white gap-2">
                  {tr("about_us")}
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("job_apply")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Title title={tr("important_links")} color="text-white" />
            <ul className="md:pt-5 pt-2">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("sms_transactions")}
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("bdex_tada")}
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("doer_lms_training")}
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("faq")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="sm:self-auto self-end">
            <Title isReverse title={tr("contact_us")} color="text-white" />
            <ul className="text-right sm:text-left md:pt-5 pt-2">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  {tr("about_agroni_doer_info")}...
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  info@doer.com.bd
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* end footer top section */}
      <div className="container mx-auto text-center text-white py-2">
        <small>
          2024 ©{" "}
          <Link
            className="text-blue-400 "
            target="_blank"
            href={"http://doer.com.bd/"}
          >
            DOER Services Ltd..
          </Link>{" "}
          All Rights Reserved
        </small>
      </div>
    </div>
  );
}
