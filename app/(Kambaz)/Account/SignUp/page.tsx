import React from "react";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function SignUp() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl
        placeholder="username"
        type="text"
        defaultValue="user123"
        className="mb-2"
      />
      <FormControl
        placeholder="password"
        type="password"
        defaultValue="password"
        className="mb-2"
      />
      <FormControl
        placeholder="verify password"
        type="password"
        defaultValue="password"
        className="mb-2"
      />
      <Link href="Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link href="SignIn" className="btn btn-secondary w-100 mb-2">
        Sign In
      </Link>
    </div>
  );
}
