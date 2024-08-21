import { INavLink } from "@/types/hero";
import Link from "next/link";
import React from "react";

type Props = { item: INavLink; isSticky: boolean };

export default function NavLinks({ item, isSticky }: Props) {
  return (
    <Link href={"/" + item.href}>
      {item.icon ? item.icon : null}
      <li
        className={`font-bold ${
          isSticky ? "text-gray-900" : "text-white"
        } hover:-translate-y-1 transition-all hover:text-red-400`}
      >
        {item.title}
      </li>
    </Link>
  );
}
