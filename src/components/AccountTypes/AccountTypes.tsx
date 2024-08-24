import { Link } from "@/navigation";
import React from "react";

type Props = {};

export default function AccountTypes({}: Props) {
  return (
    <div className="bg-[#155886]/10">
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-4 lg:flex-row md:justify-evenly md:items-center">
          <div>
            <div className="md:flex hidden flex-col justify-center items-center gap-1 flex-wrap py-[60px]">
              <div className="relative w-[170px] h-[170px] rounded-xl bg-blue-400 rotate-45 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                  <p className="text-center w-2/3 text-3xl font-bold text-white">
                    সেভিংস একাউন্ট
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[170px] h-[170px] rounded-xl bg-gray-400 rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-3xl font-bold text-white">
                      বিজনেস একাউন্ট
                    </p>
                  </div>
                </div>
                <div className="relative w-[170px] h-[170px] rounded-xl bg-gray-400 rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-3xl font-bold text-white">
                      RDF
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[170px] h-[170px] rounded-xl bg-[#155886] rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-3xl font-bold text-white">
                      সুপার সেভিংস{" "}
                    </p>
                  </div>
                </div>
                <div className="relative w-[170px] h-[170px] rounded-xl bg-[#155886] rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-3xl font-bold text-white">
                      ABS
                    </p>
                  </div>
                </div>
                <div className="relative w-[170px] h-[170px] rounded-xl bg-[#155886] rotate-45">
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
              <div className="flex flex-col gap-0 w-[220px]">
                <div className="relative w-[150px] h-[150px] rounded-xl bg-blue-400 rotate-45 shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      সেভিংস একাউন্ট
                    </p>
                  </div>
                </div>
                <div className="relative w-[150px] h-[150px] rounded-xl bg-gray-400 rotate-45 self-end">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      বিজনেস একাউন্ট
                    </p>
                  </div>
                </div>
                <div className="relative w-[150px] h-[150px] rounded-xl bg-gray-400 rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      RDF
                    </p>
                  </div>
                </div>
                <div className="relative w-[150px] h-[150px] rounded-xl bg-[#155886] rotate-45 self-end">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      সুপার সেভিংস{" "}
                    </p>
                  </div>
                </div>
                <div className="relative w-[150px] h-[150px] rounded-xl bg-[#155886] rotate-45">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      ABS
                    </p>
                  </div>
                </div>
                <div className="relative w-[150px] h-[150px] rounded-xl bg-[#155886] rotate-45 self-end">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <p className="text-center w-2/3 text-2xl font-bold text-white">
                      স্টুডেন্ট একাউন্ট
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2 lg:h-[300px] w-1/2 lg:w-2 self-center rounded shadow bg-[#155886]"></div>
          <div className="flex justify-center items-center py-4">
            <div>
              <div className="text-3xl text-[#155886] font-bold">
                ডিপোজিট প্রোডাক্টস
              </div>
              <Link
                className="text-blue-400 block w-full text-right"
                href={"/"}
              >
                আরও জানুন...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
