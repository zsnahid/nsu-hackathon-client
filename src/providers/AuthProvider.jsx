/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.config";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userloading, setUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      console.log(currenUser);
      setUser(currenUser);
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier)
  };

  const authUtils = {
    user,
    userloading,
    createUser,
    logIn,
    logOut,
    updateUserProfile,
    setUpRecaptcha,
  };
  return (
    <AuthContext.Provider value={authUtils}>{children}</AuthContext.Provider>
  );
}
