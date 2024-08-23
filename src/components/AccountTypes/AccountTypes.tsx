import Link from "next/link";
import React from "react";

type Props = {};

export default function AccountTypes({}: Props) {
  return (
    <div className="bg-gray-100/20">
      <div className="container mx-auto">
        <div className="md:flex hidden flex-col justify-center items-center gap-1 flex-wrap py-[60px]">
          <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-blue-400 rotate-45 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
              <p className="text-center w-2/3 text-3xl font-bold text-white">
                সেভিংস একাউন্ট
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-gray-400 rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  বিজনেস একাউন্ট
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-gray-400 rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  RDF
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  সুপার সেভিংস{" "}
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  ABS
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  স্টুডেন্ট একাউন্ট
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* for mobile device */}
        <div className="md:hidden flex justify-center items-center overflow-hidden py-[60px]">
          <div className="flex flex-col items-stretch gap-0 w-4/5 sm:w-1/2 ">
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-blue-400 rotate-45 shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  সেভিংস একাউন্ট
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-gray-400 rotate-45 self-end">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  বিজনেস একাউন্ট
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-gray-400 rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  RDF
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45 self-end">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  সুপার সেভিংস{" "}
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  ABS
                </p>
              </div>
            </div>
            <div className="relative w-[180px] h-[180px] rounded-xl md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] bg-[#155886] rotate-45 self-end">
              <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                <p className="text-center w-2/3 text-3xl font-bold text-white">
                  স্টুডেন্ট একাউন্ট
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-16">
        <div>
          <div className="text-4xl text-[#155886] font-bold">
            ডিপোজিট প্রোডাক্টস
          </div>
          <Link className="text-blue-400 block w-full text-right" href={"/"}>
            আরও জানুন...
          </Link>
        </div>
      </div>
    </div>
  );
}
