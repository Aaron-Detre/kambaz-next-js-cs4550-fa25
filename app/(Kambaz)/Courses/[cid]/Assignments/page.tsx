"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsGroupControlButtons from "./AssignmentsGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import { assignments } from "@/app/(Kambaz)/Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignmentGroups = ["Assignments", "Quizzes", "Exams", "Projects"];
  return (
    <div id="wd-assignments-page">
      <AssignmentControls />
      <div className="mt-5" id="wd-assignment-list">
        {assignmentGroups.map((group: string) => (
          <div className="wd-assignment-list-header p-0 mb-5 fs-5 wd-border-light">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> {group}
              <div className="wd-flex-gap"></div>
              <AssignmentsGroupControlButtons percent={30} />
            </div>
            <ListGroup className="wd-assignment-list-content rounded-0">
              {assignments
                .filter(
                  (assignment: any) =>
                    assignment.course === cid && assignment.group === group
                )
                .map((assignment: any) => (
                  <ListGroupItem
                    key={assignment._id}
                    className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="me-2 fs-3 text-success" />
                    <div className="wd-assignment-list-item-content">
                      <Link
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-black"
                      >
                        {assignment.title}
                      </Link>
                      <div className="wd-assignment-info">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <b>Not available until</b> May 6 at 12:00am | <b>Due</b>{" "}
                        May 13 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div className="wd-flex-gap" />
                    <AssignmentControlButtons />
                  </ListGroupItem>
                ))}
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}
