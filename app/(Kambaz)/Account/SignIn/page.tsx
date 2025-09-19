import Link from "next/link";
export default function SignIn() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <input placeholder="username" type="text" defaultValue="user123" /> <br />
      <input placeholder="password" type="password" defaultValue="password" />
      <br />
      <Link href="/Dashboard"> Sign in</Link> <br />
      <Link href="SignUp"> Sign up</Link>
    </div>
  );
}
