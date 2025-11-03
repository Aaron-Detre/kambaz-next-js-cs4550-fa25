import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function EnrollmentsModeButtons({
  enrolled,
  courseId,
}: Readonly<{ enrolled: boolean; courseId: string }>) {
  const { currentUser } = useSelector((state: RootState) => state.account);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="d-flex align-items-center">
      {enrolled ? (
        <Button
          onClick={(event) => {
            event.preventDefault();
            dispatch(
              deleteEnrollment({ userId: currentUser._id, courseId: courseId })
            );
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
            dispatch(
              addEnrollment({ userId: currentUser._id, courseId: courseId })
            );
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
