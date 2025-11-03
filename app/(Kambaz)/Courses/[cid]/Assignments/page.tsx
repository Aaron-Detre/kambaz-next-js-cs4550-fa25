"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsGroupControlButtons from "./AssignmentsGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(Kambaz)/store";

export default function Assignments() {
  const { cid } = useParams();
  const assignmentGroups = ["Assignments", "Quizzes", "Projects", "Activities"];
  const { assignments } = useSelector((state: RootState) => state.assignments);
  return (
    <div id="wd-assignments-page">
      <AssignmentControls />
      <div className="mt-5" id="wd-assignment-list">
        {assignmentGroups.map((group: string) => (
          <div
            key={group}
            className="wd-assignment-list-header p-0 mb-5 fs-5 wd-border-light"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> {group}
              <div className="wd-flex-gap"></div>
              <AssignmentsGroupControlButtons percent={30} />
            </div>
            <ListGroup className="wd-assignment-list-content rounded-0">
              {assignments
                .filter(
                  (assignment) =>
                    assignment.course === cid && assignment.group === group
                )
                .map((assignment) => (
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
                        <b>Not available until</b> {assignment.from} |{" "}
                        <b>Due</b> {assignment.due} | {assignment.points} pts
                      </div>
                    </div>
                    <div className="wd-flex-gap" />
                    <AssignmentControlButtons assignmentId={assignment._id} />
                  </ListGroupItem>
                ))}
            </ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}
