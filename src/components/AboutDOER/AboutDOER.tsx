import React from "react";
import Title from "../common/Title";
import Link from "next/link";

type Props = {};

export default function AboutDOER({}: Props) {
  return (
    <div id="services" className="py-10 container mx-auto">
      <Title title="অগ্রণী দুয়ার ব্যাংকিং কি?" />
      <blockquote
        className="text-lg text-justify py-4"
        cite="https://agranidoer.com"
      >
        অগ্রণী ব্যাংক লিমিটেড একটি রাষ্ট্রায়াত্ত সরকারি ব্যাংক, যা প্রতিটি
        জনগণের বিশ্বাসযোগ্য এবং নিরাপদ ব্যাংকিং সেবা গ্রহণের আশ্রয়স্থল। এই সেবা
        গ্রাহকের দুয়ারে পৌঁছানোর প্রয়াসের নাম "অগ্রণী দুয়ার ব্যাংকিং"। শক্তিশালী
        ও কার্যকরী এজেন্ট নেটওয়ার্ক স্থাপনের মাধ্যমে দেশের প্রতিটি থানায়, বিশেষ
        করে প্রত্যন্ত অঞ্চলগুলোতে সহজ ও নিরাপদ ব্যাংকিং সেবা প্রদান করার
        অঙ্গীকার নিয়ে কাজ করে যাচ্ছে "অগ্রণী দুয়ার ব্যাংকিং"। একটু সচেতনতা ও
        সতর্কতা অবলম্বনের মাধ্যমে গ্রাহকের ব্যাংকিং সেবা গ্রহণের ক্ষেত্রে অগ্রণী
        ব্যাংক যতটুকু নিরাপদ, অগ্রণী দুয়ার ব্যাংকিং ততটুকুই নিরাপদ।{" "}
        <Link className="text-blue-400" href={"/#"}>
          বিস্তারিত...
        </Link>
      </blockquote>
      <div className="flex justify-end">
        <button className="block bg-blue-950 text-white p-5 font-bold rounded-md text-5xl">
          এজেন্ট শাখা এর জন্য আবেদন করুন
        </button>
      </div>
    </div>
  );
}
