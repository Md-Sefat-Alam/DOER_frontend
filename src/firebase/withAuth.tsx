"use client";

import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "@/navigation";

export default function withAuth(Component: any) {
  return function WithAuthComponent(props: any) {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [user, loading, router]);

    if (loading) {
      return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-500 to-transparent">
          <CgSpinner className="animate-spin text-5xl text-blue-500 font-bold" />
        </div>
      );
    }
    if (!user) {
      return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-500 to-transparent">
          <CgSpinner className="animate-spin text-5xl text-blue-500 font-bold" />
        </div>
      );
    }

    return <Component {...props} />;
  };
}
