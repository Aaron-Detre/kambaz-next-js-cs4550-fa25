/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { deleteCourse } from "../Courses/reducer";
import { deleteCourseEnrollments } from "./reducer";

export default function StandardCourseButtons({
  course,
  setCourse,
}: Readonly<{ course: any; setCourse: Function }>) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="d-flex align-items-center">
      <Button variant="success">Go</Button>
      <div className="wd-flex-gap" />
      <Button
        id="wd-edit-course-click"
        onClick={(event) => {
          event.preventDefault();
          setCourse(course);
        }}
        className="btn me-2"
        variant="primary"
      >
        Edit
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault();
          const courseId = course._id;
          dispatch(deleteCourse(courseId));
          dispatch(deleteCourseEnrollments(courseId));
        }}
        className="btn btn-danger"
        id="wd-delete-course-click"
        variant="warning"
      >
        Delete
      </Button>
    </div>
  );
}
