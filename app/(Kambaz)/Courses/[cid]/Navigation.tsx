"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default function CourseNavigation({ cid }: Readonly<{ cid: string }>) {
  const pathname = usePathname();
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People/Table" },
  ];
  return (
    <ListGroup
      className="rounded-0 bottom-0 top-0 d-none d-md-block z-2 me-3"
      style={{ width: 110 }}
      id="wd-course-navigation"
    >
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          className={`border-0 bg-white ${
            pathname.includes(link.label) ? "active text-black" : "text-danger"
          }`}
          as={Link}
          href={`/Courses/${cid}/${link.path}`}
        >
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
