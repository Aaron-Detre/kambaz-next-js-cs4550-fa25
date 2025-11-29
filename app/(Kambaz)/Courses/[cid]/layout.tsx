/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid }: { cid: string } = useParams();
  const { courses } = useSelector((state: RootState) => state.courses);
  const { open } = useSelector((state: RootState) => state.breadcrumb);
  const course: any = courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses">
      <Breadcrumb />
      <hr />
      <div className="d-flex">
        {open && (
          <div className="d-none d-md-block">
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
