"use client";
import { INavLink } from "@/types/hero";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

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
        (isSticky ? "shadow-lg bg-white" : "") + ` fixed top-0 w-full py-2 z-10 transition-all`
      }
    >
      <div className="container mx-auto py-1">
        <div className="flex justify-between">
          <div>
            <Image
              alt="log"
              src={"/assets/logo/DOER_Logo.png"}
              width={120}
              height={120}
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
              } font-bold`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
