"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default function CourseNavigation({ cid }: Readonly<{ cid: string }>) {
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <ListGroup
      className="rounded-0 bottom-0 top-0 d-none d-md-block z-2 me-3"
      style={{ width: 110 }}
      id="wd-course-navigation"
    >
      {links.map((link) => (
        <ListGroupItem
          key={link}
          className={`border-0 bg-white ${
            pathname.includes(link) ? "wd-active text-black" : "text-danger"
          }`}
          as={Link}
          href={`/Courses/${cid}/${link}`}
        >
          {link}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
