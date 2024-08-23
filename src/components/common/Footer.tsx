import React from "react";
import SocialIcon from "./SocialIcon";
import Title from "./Title";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-gray-600">
      <div className="container mx-auto py-10 flex md:flex-row flex-col px-2 xl:px-0">
        <div className="md:w-[30%] w-full flex flex-col justify-center sm:items-start items-center">
          <div className="pb-10">
            <h1 className="text-3xl font-bold text-white pb-2">অগ্রণী দুয়ার</h1>
            <blockquote className="text-gray-400">
              সম্ভাবনার খোলা দুয়ার
            </blockquote>
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
            <Title isReverse title="অগ্রনী দুয়ার সম্পর্কে" color="text-white " />
            <ul className="md:pt-5 pt-2  text-right md:text-left ">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white gap-2">
                  আমাদের সম্পর্কে
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  চাকুরির আবেদন
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Title title="গুরুত্বপূর্ণ লিংকসমূহ" color="text-white" />
            <ul className="md:pt-5 pt-2">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  লেনদেনের SMS - আবেদন
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  BDEx - TADA - প্রদান
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  DOER LMS (Training)
                </li>
              </Link>
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  FAQ
                </li>
              </Link>
            </ul>
          </div>
          <div className="sm:self-auto self-end">
            <Title isReverse title="যোগাযোগ করুন" color="text-white" />
            <ul className="text-right md:text-left md:pt-5 pt-2">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
                  অগ্রণীদুয়ার সম্পর্কিত তথ্য জানতে ...
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
          2019 ©{" "}
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
