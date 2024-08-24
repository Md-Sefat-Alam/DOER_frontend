"use client";
import { Link, useRouter } from "@/navigation";
import { INavLink } from "@/types/hero";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import LocaleCn from "./LocaleCn";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import { useTranslations } from "next-intl";

type Props = {};

export default function NavBar({}: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavMobile, setIsNavMobile] = useState(false);
  const t = useTranslations("home_nav");

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

  const links: INavLink[] = [
    { id: 1, title: t("home"), href: "#home" },
    { id: 2, title: t("services"), href: "#services" },
    { id: 3, title: t("gallery"), href: "#gallery" },
    { id: 4, title: t("special_works"), href: "#special_works" },
    { id: 5, title: t("contact"), href: "#contact" },
    { id: 5, title: t("dashboard"), href: "dashboard" },
  ];

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
            <Link href={"/"}>
              <Image
                alt="log"
                src={"/assets/logo/DOER_Logo.png"}
                width={110}
                height={110}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-4">
              {links.map((item) => (
                <NavLinks item={item} isSticky={isSticky} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <LocaleCn isSticky={isSticky} />
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
            <Link href={"/"}>
              <Image
                alt="log"
                src={"/assets/logo/DOER_Logo.png"}
                width={110}
                height={110}
              />
            </Link>
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
              <LocaleCn isSticky={isSticky} />
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
