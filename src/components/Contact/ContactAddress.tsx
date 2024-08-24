import { MailIcon } from "@/resources/Icons";
import { convertNumber } from "@/utils/NumberConverter";
import { HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { ReactElement } from "react";

type Props = {};

export default function ContactAddress({}: Props) {
  const tr = useTranslations("home_contact");
  const common = useTranslations("common");
  return (
    <div className="md:w-[40%] w-full">
      <div>
        <SingleItem
          icon={<MailIcon className="w-[30px] stroke-gray-500" />}
          title={tr("email") + ":"}
          description="info@doer.com.bd"
        />
        <SingleItem
          icon={<PhoneIcon className="w-[30px] stroke-gray-500" />}
          title={tr("mobile") + ":"}/* 01985555015, 09-606-606-606 */
          description={convertNumber(common, "019-8555-5015, 09-606-606-606")}
        />
        <SingleItem
          icon={<HomeIcon className="w-[30px] stroke-gray-500" />}
          title={tr("address") + ":"}
          description={tr("address_detail")}
        />
      </div>
    </div>
  );
}

const SingleItem = ({
  description,
  icon,
  title,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-5 py-2">
      {icon}
      <div>
        <h4 className="text-red-600 text-lg font-bold pt-4">{title}</h4>
        <p className="pt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
};
