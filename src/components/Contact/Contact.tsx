import React from "react";
import Title from "../common/Title";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

type Props = {};

export default function Contact({}: Props) {
  const tr = useTranslations("home_contact");
  return (
    <div id="contact">
      <div className="container mx-auto py-8 xl:px-0 px-4">
        <Title title={tr("contact_address")} />
        <div className="py-8 flex md:justify-between md:flex-row flex-col justify-center">
          <ContactAddress />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
