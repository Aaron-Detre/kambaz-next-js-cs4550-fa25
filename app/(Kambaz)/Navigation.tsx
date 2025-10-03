"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import "./styles.css";
export default function KambazNavigation() {
  const [selected, setSelected] = useState("dashboard");
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isSelected("account")}`}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-decoration-none"
          onClick={() => setSelected("account")}
        >
          <FaRegCircleUser className="fs-1" />
          <span>Account</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isSelected("dashboard")}`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-decoration-none"
          onClick={() => setSelected("dashboard")}
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <span>Dashboard</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isSelected("courses")}`}
      >
        <Link
          href="/Dashboard"
          id="wd-courses-link"
          className="text-decoration-none"
          onClick={() => setSelected("courses")}
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <span>Courses</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${isSelected("calendar")}`}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className="text-decoration-none"
          onClick={() => setSelected("calendar")}
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <span>Calendar</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center ${isSelected("inbox")}`}>
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-decoration-none"
          onClick={() => setSelected("inbox")}
        >
          <FaInbox className="fs-1 text-danger" />
          <span className="d-block">Inbox</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className={`border-0 text-center ${isSelected("labs")}`}>
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-decoration-none"
          onClick={() => setSelected("labs")}
        >
          <LiaCogSolid className="fs-1 text-danger" />
          <span className="d-block">Labs</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );

  function isSelected(page: string): string {
    return selected === page ? "selected" : "unselected";
  }
}
