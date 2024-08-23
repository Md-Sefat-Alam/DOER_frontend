import React from "react";
import SocialIcon from "./SocialIcon";
import Title from "./Title";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-gray-600">
      <div className="container mx-auto py-10 flex px-2 xl:px-0">
        <div className="w-[30%]">
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
        <div className="w-[70%] flex justify-between">
          <div>
            <Title title="অগ্রনী দুয়ার সম্পর্কে" color="text-white" />
            <ul className="pt-5">
              <Link href={"/#"}>
                <li className="text-gray-400 hover:-translate-y-1 transition-all hover:text-white">
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
          <div>
            <Title title="গুরুত্বপূর্ণ লিংকসমূহ" color="text-white" />
            <ul className="pt-5">
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
          <div>
            <Title title="যোগাযোগ করুন" color="text-white" />
            <ul className="pt-5">
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
