import { INavLink } from "@/types/hero";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  item: INavLink;
  isSticky: boolean;
  setIsNavMobile: Dispatch<SetStateAction<boolean>>;
};

export default function NavLinksMobile({
  item,
  isSticky,
  setIsNavMobile,
}: Props) {
  return (
    <Link
      onClick={() => setIsNavMobile((prev) => !prev)}
      href={"/" + item.href}
      className="bg-blue-500/50 px-10 py-2"
    >
      {item.icon ? item.icon : null}
      <li className={`font-bold text-white`}>{item.title}</li>
    </Link>
  );
}
