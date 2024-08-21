import React from "react";
import Title from "../common/Title";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div>
      <div className="container mx-auto py-8">
        <Title title="যোগাযোগের ঠিকানা" />
        <div className="py-8 flex justify-between">
          <ContactAddress />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
