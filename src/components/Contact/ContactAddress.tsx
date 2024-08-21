import { MailIcon } from "@/resources/Icons";
import { HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

type Props = {};

export default function ContactAddress({}: Props) {
  return (
    <div className="w-[40%]">
      <div>
        <SingleItem
          icon={<MailIcon className="w-[30px] stroke-gray-500" />}
          title="ইমেল:"
          description="info@doer.com.bd"
        />
        <SingleItem
          icon={<PhoneIcon className="w-[30px] stroke-gray-500" />}
          title="মোবাইল:"
          description="০১৯৮৫৫৫৫০১৫, ০৯-৬০৬-৬০৬-৬০৬"
        />
        <SingleItem
          icon={<HomeIcon className="w-[30px] stroke-gray-500" />}
          title="ঠিকানা:"
          description="জীবন বীমা টাওয়ার (লেভেল ১৩), ১০ দিলকুশা বানিজ্যিক এলাকা মতিঝিল,
              ঢাকা-১০০০, বাংলাদেশ।"
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
