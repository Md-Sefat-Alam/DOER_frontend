"use client";
import auth from "@/firebase/firebase.init";
import { useRouter } from "@/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {};

export default function page({}: Props) {
  const [signInWithEmailAndPassword, signedUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passRef?.current?.value;

    setBtnLoading(true);
    if (!email || !password) {
      toast("Please fill in all fields", { type: "error" });
      return;
    }

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) === false) {
      return toast("Invalid Email", { type: "error" });
    }
    if (password.length < 6) {
      return toast("Password too short", { type: "warning" });
    }

    await signInWithEmailAndPassword(email, password);
    resetForm();
  };

  useEffect(() => {
    if (error) {
      toast(error?.message, { type: "error" });
    }

    if (user) {
      toast.success("Successfully logged in!", { type: "success" });
      return router.push("/dashboard");
    }
  }, [user, error, loading]);

  const resetForm = () => {
    if (emailRef.current) emailRef.current.value = "";
    if (passRef.current) passRef.current.value = "";
  };

  console.log({ user });

  return (
    <div className="bg-gradient-to-b min-h-screen from-gray-500 to-transparent">
      <div className="container mx-auto min-h-screen flex justify-center items-center">
        <div className="lg:w-3/4 sm:w-11/12 mx-4 min-h-[500px] md:mx-auto rounded-xl bg-gray-300/50 flex md:flex-row flex-col justify-center items-center">
          <div
            className={`md:w-1/2 w-[350px] md:min-h-[500px] h-[350px] self-center bg-no-repeat bg-cover bg-center`}
            style={{
              backgroundImage: `url('/assets/common/login_avater.png')`,
            }}
          ></div>
          <div className="md:w-1/2 w-11/12">
            <form onSubmit={handleSubmit} method="post" className="mx-8">
              <div className="flex flex-col items-start gap-2 py-2">
                <label
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                  htmlFor="title"
                >
                  Email:
                </label>
                <input
                  required
                  ref={emailRef}
                  className="w-full py-2 px-2 focus:outline-red-200 rounded"
                  type="text"
                  name="Email"
                  placeholder="Type: admin@admin.com"
                />
              </div>
              <div className="flex flex-col items-start gap-2 py-2">
                <label
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                  htmlFor="description"
                >
                  Password:
                </label>
                <input
                  required
                  ref={passRef}
                  className="w-full py-2 px-2 focus:outline-red-200 rounded"
                  type="password"
                  name="description"
                  placeholder="Type: admin@"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={btnLoading}
                  className="bg-blue-600 font-bold text-white p-3 px-4 rounded-md flex justify-center items-center"
                >
                  <FaSpinner
                    style={{ width: btnLoading ? "auto" : "0px" }}
                    className={`animate-spin ${
                      btnLoading ? "h-5 w-5 mr-3" : ""
                    } transition-all`}
                  />
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
