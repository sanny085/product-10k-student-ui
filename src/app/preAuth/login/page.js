"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import useToast from "@/hooks/useToast";

const Login = () => {
  const { showErrorToast } = useToast();

  useEffect(() => {
    console.log(window.location);
    const redirectTo = window.location.search
      ? new URLSearchParams(window.location.search).get("redirectTo")
      : null;

    if (redirectTo) {
      showErrorToast("Please login to access this page", "top-right", "light");

      const currentUrl = window.location.href;
      const updatedUrl = currentUrl.replace(
        `?redirectTo=${encodeURIComponent(redirectTo)}`,
        ""
      );
      window.history.replaceState({}, document.title, updatedUrl);
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      Login
    </div>
  );
};

export default Login;
