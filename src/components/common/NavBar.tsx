import { INavLink } from "@/types/hero";
import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

type Props = {};

const links: INavLink[] = [
  { id: 1, title: "হোম", href: "#home" },
  { id: 2, title: "সেবাসমূহ", href: "#services" },
  { id: 3, title: "গ্যালারী", href: "#gallery" },
  { id: 4, title: "বিশেষ কর্মসূচী", href: "#special_works" },
  { id: 5, title: "যোগাযোগ", href: "#contact" },
  { id: 5, title: "লগইন", href: "#login" },
];

export default function NavBar({}: Props) {
  return (
    <div className="absolute top-0 w-full py-2 z-10 ">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <Image
              alt="log"
              src={"/assets/logo/DOER_Logo_light.png"}
              width={150}
              height={150}
            />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-4">
              {links.map((item) => (
                <NavLinks item={item} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button>English</button>
          </div>
        </div>
      </div>
    </div>
  );
}
