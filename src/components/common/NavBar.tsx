"use client";
import { INavLink } from "@/types/hero";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import { MdMenu } from "react-icons/md";

type Props = {};

const links: INavLink[] = [
  { id: 1, title: "হোম", href: "#home" },
  { id: 2, title: "সেবাসমূহ", href: "#services" },
  { id: 3, title: "গ্যালারী", href: "#gallery" },
  { id: 4, title: "বিশেষ কর্মসূচী", href: "#special_works" },
  { id: 5, title: "যোগাযোগ", href: "#contact" },
  { id: 5, title: "ড্যাশবোর্ড", href: "dashboard" },
];

export default function NavBar({}: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavMobile, setIsNavMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        (isSticky && !isNavMobile ? "shadow-lg bg-white/85" : "") +
        ` fixed top-0 w-full z-10 transition-all`
      }
    >
      {/* This is for Large Device */}
      <div className="container mx-auto py-1 xl:px-0 px-2 hidden md:block">
        <div className="flex justify-between">
          <div>
            <Image
              alt="log"
              src={"/assets/logo/DOER_Logo.png"}
              width={110}
              height={110}
            />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-4">
              {links.map((item) => (
                <NavLinks item={item} isSticky={isSticky} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`${
                isSticky ? "text-gray-900" : "text-white"
              } font-bold flex gap-1`}
            >
              <BiWorld className="text-2xl text-blue-400" />
              English
            </button>
          </div>
        </div>
      </div>

      {/* This is for Mobile Device */}
      <div
        className={`block md:hidden ${
          isNavMobile ? "h-screen overflow-hidden" : ""
        }`}
      >
        <div className="relative">
          <div className="z-20 py-1">
            <Image
              alt="log"
              src={"/assets/logo/DOER_Logo.png"}
              width={110}
              height={110}
            />
          </div>

          <div
            style={{
              height: isNavMobile ? "100vh" : "0px",
            }}
            className={` absolute transition-[height] top-0 ${
              isNavMobile ? "bg-black/70" : ""
            } w-full h-screen overflow-hidden ${
              isNavMobile ? "pt-20 pb-4" : ""
            }`}
          >
            <div className="">
              <ul className="flex flex-col gap-2">
                {links.map((item) => (
                  <NavLinksMobile
                    item={item}
                    isSticky={isSticky}
                    setIsNavMobile={setIsNavMobile}
                  />
                ))}
              </ul>
            </div>
            <div className="flex justify-end items-center mt-4 mr-4">
              <button
                className={`text-white font-bold bg-gray-500/50 p-4 rounded flex gap-2`}
              >
                <BiWorld className="text-2xl text-blue-400" /> English
              </button>
            </div>
          </div>
          {isNavMobile ? (
            <CgClose
              onClick={() => setIsNavMobile((prev) => !prev)}
              className="absolute transition-all top-3 right-5 bg-red-400 p-1 rounded-full text-4xl font-bold text-white"
            />
          ) : (
            <MdMenu
              onClick={() => setIsNavMobile((prev) => !prev)}
              className="absolute transition-all top-3 right-5 bg-black/30 p-1 rounded-full text-4xl font-bold text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
}
