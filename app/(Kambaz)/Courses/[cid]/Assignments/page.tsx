import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsGroupControlButtons from "./AssignmentsGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments-page">
      <AssignmentControls />
      <ListGroup className="rounded-0 mt-5" id="wd-assignment-list">
        <ListGroupItem className="wd-assignment-list-header p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> Assignments
            <div className="wd-flex-gap"></div>
            <AssignmentsGroupControlButtons percent={30} />
          </div>
          <ListGroup className="wd-assignment-list-content rounded-0">
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="wd-assignment-list-item-content">
                <Link
                  href="/Courses/1234/Assignments/100"
                  className="wd-assignment-link text-decoration-none text-black"
                >
                  A1
                </Link>
                <div className="wd-assignment-info">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May
                  13 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="wd-flex-gap" />
              <AssignmentControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="wd-assignment-list-item-content">
                <Link
                  href="/Courses/1234/Assignments/101"
                  className="wd-assignment-link text-decoration-none text-black"
                >
                  A2
                </Link>
                <div className="wd-assignment-info">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May
                  20 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="wd-flex-gap" />
              <AssignmentControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="wd-assignment-list-item-content">
                <Link
                  href="/Courses/1234/Assignments/102"
                  className="wd-assignment-link text-decoration-none text-black"
                >
                  A3
                </Link>
                <div className="wd-assignment-info">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May
                  27 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="wd-flex-gap" />
              <AssignmentControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-quizzes-list-header p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> Quizzes
            <div className="wd-flex-gap"></div>
            <AssignmentsGroupControlButtons percent={10} />
          </div>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-header p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> Exams
            <div className="wd-flex-gap"></div>
            <AssignmentsGroupControlButtons percent={30} />
          </div>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-header p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> Projects
            <div className="wd-flex-gap"></div>
            <AssignmentsGroupControlButtons percent={30} />
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
