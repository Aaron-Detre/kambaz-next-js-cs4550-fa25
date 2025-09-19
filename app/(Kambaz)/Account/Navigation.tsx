import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="SignIn">Sign in</Link> <br />
      <Link href="SignUp">Sign up</Link> <br />
      <Link href="Profile">Profile</Link> <br />
    </div>
  );
}
