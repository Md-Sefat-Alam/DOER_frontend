import { IOurServices } from "@/types/ourService";
import Title from "../common/Title";
import Service from "./Service";
import { useTranslations } from "next-intl";
import { ITrans } from "@/types/common";

type Props = {};

export default function OurServices({}: Props) {
  const t = useTranslations("home_our_services");

  return (
    <div className="bg-gray-100/65">
      <div className="py-16 container mx-auto xl:px-0 px-4">
        <Title title={t("our_services")} />
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 w-full xl:w-[70%] mx-auto my-4">
          {withInternalization(t).map((item) => (
            <Service item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const withInternalization = (t: ITrans) => {
  const services: IOurServices[] = [
    {
      id: 1,
      title: t("cash_deposit"),
      icon: "/assets/services/cash deposit.png",
    },
    {
      id: 2,
      title: t("cash_withdraw"),
      icon: "/assets/services/cash withdraw.png",
    },
    {
      id: 3,
      title: t("online_transfer"),
      icon: "/assets/services/online.png",
    },
    {
      id: 4,
      title: t("remittance"),
      icon: "/assets/services/remittance.png",
    },
    {
      id: 5,
      title: t("utility_bill"),
      icon: "/assets/services/utility.png",
    },
    {
      id: 6,
      title: t("balance_check"),
      icon: "/assets/services/balance.png",
    },
  ];
  return services;
};
