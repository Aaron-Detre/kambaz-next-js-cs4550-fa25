/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { assignments } from "@/app/(Kambaz)/Database";
import { AppDispatch } from "@/app/(Kambaz)/store";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { Assignment } from "../type";

export default function AssignmentEditor() {
  const assignmentsPathname =
    "/" + usePathname().split("/").splice(1, 3).join("/");
  const { cid, aid } = useParams();
  const baseAssignment: Assignment = {
    _id: "",
    title: "",
    course: `${cid}`,
    description: "",
    points: 100,
    due: "2025-11-01",
    from: "2025-11-01",
    until: "2025-11-01",
    group: "Assignments",
  };
  const [assignment, setAssignment] = useState<any>(
    assignments.find((a) => a._id === aid) ?? baseAssignment
  );

  const dispatch: AppDispatch = useDispatch();

  const updateTitle = (e: any) => {
    setAssignment({ ...assignment, title: e.target.value });
  };
  const updateDescription = (e: any) => {
    setAssignment({ ...assignment, description: e.target.value });
  };

  const updatePoints = (e: any) => {
    setAssignment({ ...assignment, points: parseInt(e.target.value) });
  };

  const updateGroup = (e: any) => {
    setAssignment({ ...assignment, group: e.target.value });
  };

  // const updateGradeDipslayType = (e: any) => {
  //   setAssignment({ ...assignment, title: e.target.value });
  // };

  const updateDueDate = (e: any) => {
    setAssignment({ ...assignment, due: e.target.value });
  };

  const updateAvailableFromDate = (e: any) => {
    setAssignment({ ...assignment, from: e.target.value });
  };
  const updateAvailableUntilDate = (e: any) => {
    setAssignment({ ...assignment, until: e.target.value });
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          type="text"
          defaultValue={assignment.title}
          onChange={updateTitle}
        />
        <FormControl
          className="mt-4"
          as="textarea"
          rows={8}
          onChange={updateDescription}
          defaultValue={assignment.description}
        />
        <Row className="mt-5">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-center"
          >
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={10}>
            <FormControl
              type="number"
              defaultValue={assignment.points}
              onChange={updatePoints}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-center"
          >
            <FormLabel>Assignment Group</FormLabel>
          </Col>
          <Col md={10}>
            <FormSelect onChange={updateGroup} defaultValue={assignment.group}>
              <option value="Assignments" defaultChecked>
                Assignments
              </option>
              <option value="Projects" defaultChecked>
                Projects
              </option>
              <option value="Activities" defaultChecked>
                In-Class Activities
              </option>
              <option value="Quizzes" defaultChecked>
                Quizzes
              </option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-center"
          >
            <FormLabel>Display Grade as (not saved)</FormLabel>
          </Col>
          <Col md={10}>
            <FormSelect>
              <option value="percentage" defaultChecked>
                Percentage
              </option>
              <option value="decimal" defaultChecked>
                Decimal
              </option>
              <option value="letter" defaultChecked>
                Letter
              </option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-start"
          >
            <FormLabel>Submission Type (not saved)</FormLabel>
          </Col>
          <Col md={10}>
            <Card>
              <CardBody>
                <FormSelect className="m-1">
                  <option value="online" defaultChecked>
                    Online
                  </option>
                  <option value="in-person">In-person</option>
                </FormSelect>
                <FormLabel className="mt-2">
                  <b>Online Entry Options</b>
                </FormLabel>
                <FormCheck
                  type="checkbox"
                  name="online-entry-options"
                  label="Text Entry"
                  className="mt-1"
                />
                <FormCheck
                  type="checkbox"
                  name="online-entry-options"
                  label="Website URL"
                  className="mt-3"
                />
                <FormCheck
                  type="checkbox"
                  name="online-entry-options"
                  label="Media Recording"
                  className="mt-3"
                />
                <FormCheck
                  type="checkbox"
                  name="online-entry-options"
                  label="Student Annotation"
                  className="mt-3"
                />
                <FormCheck
                  type="checkbox"
                  name="online-entry-options"
                  label="File Upload"
                  className="mt-3"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-start"
          >
            <FormLabel>Assign</FormLabel>
          </Col>
          <Col md={10}>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={2} xl={1}>
                    <FormLabel>
                      <b>Assign to (not saved)</b>
                    </FormLabel>
                  </Col>
                  <Col lg={10} xl={11}>
                    <FormControl type="text" defaultValue={"Everyone"} />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col lg={2} xl={1}>
                    <FormLabel>
                      <b>Due</b>
                    </FormLabel>
                  </Col>
                  <Col lg={10} xl={11}>
                    <FormControl
                      type="date"
                      defaultValue={assignment.due}
                      onChange={updateDueDate}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="mt-4">
                    <FormLabel>
                      <b>Available from</b>
                    </FormLabel>
                    <FormControl
                      type="date"
                      defaultValue={assignment.from}
                      onChange={updateAvailableFromDate}
                    />
                  </Col>
                  <Col lg={6} className="mt-4">
                    <FormLabel>
                      <b>Until</b>
                    </FormLabel>
                    <FormControl
                      type="date"
                      defaultValue={assignment.until}
                      onChange={updateAvailableUntilDate}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-end">
            <Link href={assignmentsPathname} className="me-2">
              <Button
                type="button"
                className="bg-secondary text-black rounded-1 wd-border-none"
              >
                Cancel
              </Button>
            </Link>
            <Link href={assignmentsPathname}>
              <Button
                type="button"
                className="bg-danger rounded-1 wd-border-none"
                onClick={() => {
                  // dispatch(deleteAssignment(assignment._id));
                  if (assignment._id === "") {
                    dispatch(addAssignment(assignment));
                  } else {
                    dispatch(updateAssignment(assignment));
                  }
                }}
              >
                Save
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
