"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TOC() {
  const pathname = usePathname();
  const paths = [
    { link: "/Labs", label: "Labs" },
    { link: "/Labs/Lab1", label: "Lab1" },
    { link: "/Labs/Lab2", label: "Lab2" },
    { link: "/Labs/Lab3", label: "Lab3" },
    { link: "/Labs/Lab4", label: "Lab4" },
    { link: "/Labs/Lab5", label: "Lab5" },
    { link: "/", label: "Kambaz" },
    {
      link: "https://github.com/Aaron-Detre/kambaz-next-js-cs4550-fa25",
      label: "GitHub Client",
      target: "_blank",
    },
    {
      link: "https://github.com/Aaron-Detre/kambaz-node-server-app",
      label: "GitHub Server",
      target: "_blank",
    },
  ];
  return (
    <Nav variant="pills">
      {paths.map((path) => (
        <NavItem key={path.label}>
          <NavLink
            href={path.link}
            as={Link}
            className={`nav-link ${
              pathname.endsWith(path.label) ? "wd-active" : ""
            }`}
            target={path.target ?? "_self"}
          >
            {path.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
