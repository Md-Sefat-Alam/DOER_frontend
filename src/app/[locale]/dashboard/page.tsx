"use client";
import Title from "@/components/common/Title";
import DashboardGallery from "@/components/Dashboard/DashboardGallery/DashboardGallery";
import auth from "@/firebase/firebase.init";
import withAuth from "@/firebase/withAuth";
import { signOut } from "firebase/auth";
import React from "react";
import { LuLogOut } from "react-icons/lu";

type Props = {};

function page({}: Props) {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-gray-500 to-transparent pt-[120px]">
      <div className="container mx-auto xl:px-0 px-4">
        <div>
          <div className="flex justify-end">
            <button
              className={`p-3 flex justify-center items-center gap-2 bg-red-500 rounded-md text-white font-bold`}
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout <LuLogOut />
            </button>
          </div>
        </div>
        <Title title="অগ্রণী দুয়ার গ্যালারী পরিবর্তন করুন" />
        <DashboardGallery />
      </div>
    </div>
  );
}

export default withAuth(page);
