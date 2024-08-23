import { IOurServices } from "@/types/ourService";
import Title from "../common/Title";
import Service from "./Service";

type Props = {};

export default function OurServices({}: Props) {
  return (
    <div className="bg-gray-100/65">
      <div className="py-16 container mx-auto xl:px-0 px-4">
        <Title title="আমাদের সেবাসমূহ" />
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 w-full xl:w-[70%] mx-auto my-4">
          {services.map((item) => (
            <Service item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const services: IOurServices[] = [
  {
    id: 1,
    title: "নগদ জমাদান",
    icon: "/assets/services/cash deposit.png",
  },
  {
    id: 2,
    title: "নগদ উত্তোলন",
    icon: "/assets/services/cash withdraw.png",
  },
  {
    id: 3,
    title: "অনলাইন ট্রান্সফার",
    icon: "/assets/services/online.png",
  },
  {
    id: 4,
    title: "রেমিট্যান্স",
    icon: "/assets/services/remittance.png",
  },
  {
    id: 5,
    title: "ইউটিলিটি বিল পেমেন্ট",
    icon: "/assets/services/utility.png",
  },
  {
    id: 6,
    title: "একাউন্ট ব্যালেন্স চেক",
    icon: "/assets/services/balance.png",
  },
];
