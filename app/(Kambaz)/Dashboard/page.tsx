/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Collapse,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addNewCourse, updateCourse } from "../Courses/reducer";
import StandardCourseButtons from "./StandardCourseButtons";
import EnrollmentsModeButtons from "./EnrollmentsModeButtons";

export default function Dashboard() {
  const { currentUser } = useSelector((state: RootState) => state.account);
  const { courses } = useSelector((state: RootState) => state.courses);
  const { enrollments } = useSelector((state: RootState) => state.enrollments);
  const dispatch: AppDispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "react.png",
    description: "",
  });

  const [enrollmentsMode, setEnrollmentsMode] = useState(false);

  const filterByEnrollment = (course: any) => {
    return enrollmentsMode ? true : userIsEnrolled(course);
  };

  const userIsEnrolled = (course: any) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === course._id
    );

  const numEnrollments = () =>
    enrollments.filter(
      (enrollment: any) => enrollment.user === currentUser?._id
    ).length;

  const [openEditor, setOpenEditor] = useState(false);

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {!currentUser &&
          ">>>sign in with username: 'test', password: 'test' to access courses"}
        <div className="wd-flex-gap" />
        <Button
          variant="primary"
          onClick={() => setEnrollmentsMode(!enrollmentsMode)}
          className="me-2"
        >
          Enrollments
        </Button>
        <Button variant="success" onClick={() => setOpenEditor(!openEditor)}>
          Course Editor
        </Button>
      </div>
      <hr />
      <Collapse in={openEditor}>
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormLabel htmlFor="wd-course-name-input">Course Name</FormLabel>
          <FormControl
            className="mb-2"
            value={course.name}
            id="wd-course-name-input"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="New Course"
          />
          <FormLabel htmlFor="wd-course-description-input">
            Course Description
          </FormLabel>
          <FormControl
            as="textarea"
            rows={3}
            value={course.description}
            id="wd-course-description-input"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="New Description"
          />
          <hr />
        </div>
      </Collapse>
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length}) | Enrolled Courses (
        {numEnrollments()})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter(filterByEnrollment).map((dashboardCourse: any) => (
            <Col
              key={dashboardCourse._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${dashboardCourse._id}/Home`}
                  className={`wd-dashboard-course-link text-decoration-none text-dark ${
                    enrollmentsMode && "wd-disabled-link"
                  }`}
                >
                  <CardImg
                    variant="top"
                    src={`/images/${dashboardCourse.image}`}
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {dashboardCourse.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {dashboardCourse.description}
                    </CardText>
                    {enrollmentsMode ? (
                      <EnrollmentsModeButtons
                        enrolled={userIsEnrolled(dashboardCourse)}
                        courseId={dashboardCourse._id}
                      />
                    ) : (
                      <StandardCourseButtons
                        course={dashboardCourse}
                        setCourse={setCourse}
                      />
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
