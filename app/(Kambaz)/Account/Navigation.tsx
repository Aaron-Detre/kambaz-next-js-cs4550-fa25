"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.account);
  const links = getLinks(currentUser);
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

type Link = { link: string; label: string };

const getLinks = (currentUser: any): Link[] => {
  if (currentUser) {
    if (currentUser.role === "ADMIN") {
      return [
        { link: "Profile", label: "Profile" },
        { link: "Users", label: "Users" },
      ];
    } else {
      return [{ link: "Profile", label: "Profile" }];
    }
  } else {
    return [
      { link: "SignIn", label: "Sign In" },
      { link: "SignUp", label: "Sign Up" },
    ];
  }
};
