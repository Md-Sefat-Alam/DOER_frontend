import { ISpecialWorks } from "@/types/specialWorks";
import Link from "next/link";

type Props = { item: ISpecialWorks };

export default function Card({ item }: Props) {
  return (
    <div className="py-8">
      <img className="rounded-t-2xl" src={item.imgUrl} />
      <div className="py-5">
        <h4 className="pb-4 text-xl font-bold">{item.title}</h4>
        <p className="text-justify inline pr-4 text-gray-500">{item.description}</p>
        <Link
          className="after:content-['->'] after:text-red-400 inline text-blue-400"
          href={item.link}
        >
          বিস্তারিত
        </Link>
      </div>
    </div>
  );
}
