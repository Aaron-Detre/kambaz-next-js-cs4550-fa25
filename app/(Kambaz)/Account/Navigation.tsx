"use client";
import Link from "next/link";
import { useState } from "react";
// import "../styles.css";
export default function AccountNavigation() {
  const [active, setActive] = useState("");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="SignIn"
        className={`list-group-item border-0 ${isActive("sign-in")}`}
        onClick={() => setActive("sign-in")}
      >
        Sign in
      </Link>
      <Link
        href="SignUp"
        className={`list-group-item border-0 ${isActive("sign-up")}`}
        onClick={() => setActive("sign-up")}
      >
        Sign up
      </Link>
      <Link
        href="Profile"
        className={`list-group-item border-0 ${isActive("profile")}`}
        onClick={() => setActive("profile")}
      >
        Profile
      </Link>
    </div>
  );

  function isActive(page: string): string {
    return active === page ? "active" : "text-danger";
  }
}
