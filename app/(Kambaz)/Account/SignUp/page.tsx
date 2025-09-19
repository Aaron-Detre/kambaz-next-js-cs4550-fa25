import React from "react";
import Link from "next/link";
export default function SignUp() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" type="text" defaultValue="user123" /> <br />
      <input
        placeholder="password"
        type="password"
        defaultValue="password"
      />{" "}
      <br />
      <input
        placeholder="verify password"
        type="password"
        defaultValue="password"
      />
      <br />
      <Link href="Profile"> Sign up</Link> <br />
      <Link href="SignIn"> Sign In</Link>
    </div>
  );
}
