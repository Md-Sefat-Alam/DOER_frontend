import { INavLink } from "@/types/hero";
import Link from "next/link";
import React from "react";

type Props = { item: INavLink };

export default function NavLinks({ item }: Props) {
  return (
    <Link href={"/" + item.href}>
      {item.icon ? item.icon : null}
      <li className="font-bold text-white hover:-translate-y-1 transition-all hover:text-red-400">{item.title}</li>
    </Link>
  );
}
