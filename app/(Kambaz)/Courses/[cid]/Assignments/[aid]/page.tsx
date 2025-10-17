"use client";
import { assignments } from "@/app/(Kambaz)/Database";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
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

export default function AssignmentEditor() {
  const assignmentsPathname =
    "/" + usePathname().split("/").splice(1, 3).join("/");
  const { aid } = useParams();
  const assignment = assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue={assignment?.title} />
        <FormControl
          className="mt-4"
          as="textarea"
          rows={8}
          defaultValue={`The assignment is available online Submit a link to the landing page
\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor`}
        />
        <Row className="mt-5">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-center"
          >
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={10}>
            <FormControl type="text" defaultValue={100} />
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
            <FormSelect>
              <option value="assignments" defaultChecked>
                ASSIGNMENTS
              </option>
              <option value="projects" defaultChecked>
                PROJECTS
              </option>
              <option value="activities" defaultChecked>
                IN-CLASS ACTIVITIES
              </option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={2}
            className="d-md-flex justify-content-end align-items-center"
          >
            <FormLabel>Display Grade as</FormLabel>
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
            <FormLabel>Submission Type</FormLabel>
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
                      <b>Assign to</b>
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
                    <FormControl type="date" defaultValue={"2024-04-13"} />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="mt-4">
                    <FormLabel>
                      <b>Available from</b>
                    </FormLabel>
                    <FormControl type="date" defaultValue={"2024-04-06"} />
                  </Col>
                  <Col lg={6} className="mt-4">
                    <FormLabel>
                      <b>Until</b>
                    </FormLabel>
                    <FormControl type="date" />
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
