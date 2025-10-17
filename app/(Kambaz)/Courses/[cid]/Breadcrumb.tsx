"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAlignJustify } from "react-icons/fa6";

export default function Breadcrumb({
  courseName,
}: Readonly<{ courseName: string }>) {
  const pathname = usePathname();
  return (
    <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {`${courseName} > ${pathname.split("/").at(3)}`}
    </h2>
  );
}
