import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function SignIn() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
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
      <Link href="/Dashboard" className="btn btn-primary w-100 mb-2">
        Sign in
      </Link>
      <Link href="SignUp" className="btn btn-secondary w-100">
        Sign up
      </Link>
    </div>
  );
}
