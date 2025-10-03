"use client";
import Link from "next/link";
import { useState } from "react";
export default function CourseNavigation() {
  const [active, setActive] = useState("home");
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item border-0 ${isActive("home")}`}
        onClick={() => setActive("home")}
      >
        Home
      </Link>
      <Link
        href="/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${isActive("modules")}`}
        onClick={() => setActive("modules")}
      >
        Modules
      </Link>
      <Link
        href="/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item border-0 ${isActive("piazza")}`}
        onClick={() => setActive("piazza")}
      >
        Piazza
      </Link>
      <Link
        href="/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${isActive("zoom")}`}
        onClick={() => setActive("zoom")}
      >
        Zoom
      </Link>
      <Link
        href="/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${isActive("assignments")}`}
        onClick={() => setActive("assignments")}
      >
        Assignments
      </Link>
      <Link
        href="/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${isActive("quizzes")}`}
        onClick={() => setActive("quizzes")}
      >
        Quizzes
      </Link>
      <Link
        href="/Courses/1234/People/Table"
        id="wd-course-people-link"
        className={`list-group-item border-0 ${isActive("people")}`}
        onClick={() => setActive("people")}
      >
        People
      </Link>
    </div>
  );

  function isActive(page: string): string {
    return active === page ? "active" : "text-danger";
  }
}
