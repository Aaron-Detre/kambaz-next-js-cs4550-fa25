/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function EnrollmentsModeButtons({
  enrolled,
  onEnroll,
  onUnenroll,
  courseId,
}: Readonly<{
  enrolled: boolean;
  onEnroll: any;
  onUnenroll: any;
  courseId: string;
}>) {
  const { currentUser } = useSelector((state: RootState) => state.account);
  return (
    <div className="d-flex align-items-center">
      {enrolled ? (
        <Button
          onClick={(event) => {
            event.preventDefault();
            onUnenroll(courseId);
          }}
          className="btn btn-danger wd-enabled-link"
          id="wd-unenroll-course-click"
          variant="warning"
        >
          Unenroll
        </Button>
      ) : (
        <Button
          id="wd-enroll-course-click"
          onClick={(event) => {
            event.preventDefault();
            onEnroll(courseId);
          }}
          className={`btn me-2 ${
            currentUser ? "wd-enabled-link" : "wd-disabled-link wd-grayed-out"
          }`}
          variant="success"
        >
          Enroll
        </Button>
      )}
    </div>
  );
}
