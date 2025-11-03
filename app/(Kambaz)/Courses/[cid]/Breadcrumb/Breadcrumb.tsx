"use client";
import { AppDispatch } from "@/app/(Kambaz)/store";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggle } from "./reducer";

export default function Breadcrumb({
  courseName,
}: Readonly<{ courseName: string }>) {
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  return (
    <h2 className="text-danger">
      <FaAlignJustify
        className="me-4 fs-4 mb-1"
        onClick={() => dispatch(toggle())}
      />
      {`${courseName} > ${pathname.split("/").at(3)}`}
    </h2>
  );
}
