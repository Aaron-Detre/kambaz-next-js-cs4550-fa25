"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.account);
  const links = currentUser
    ? [{ link: "Profile", label: "Profile" }]
    : [
        { link: "SignIn", label: "Sign In" },
        { link: "SignUp", label: "Sign Up" },
      ];
  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd-list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          href={`/Account/${link.link}`}
          className={`list-group-item border-0 ${
            pathname.endsWith(link.link) ? "wd-active" : "text-danger"
          }`}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
