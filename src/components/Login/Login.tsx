import auth from "@/firebase/firebase.init";
import React from "react";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

type Props = {};

export default function Login({}: Props) {
  const [signInWithEmailAndPassword, signedUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  return <div>Login</div>;
}
