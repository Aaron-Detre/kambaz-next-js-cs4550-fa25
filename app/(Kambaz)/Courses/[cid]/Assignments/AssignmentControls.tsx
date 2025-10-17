import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-lg-flex d-md-block d-sm-flex"
    >
      <InputGroup id="wd-assignment-search" className="mb-1">
        <InputGroupText>
          <FaMagnifyingGlass />
        </InputGroupText>
        <FormControl placeholder="Search..." />
      </InputGroup>
      <div className="wd-flex-gap"></div>
      <Button
        variant="secondary"
        size="lg"
        className="me-1"
        id="wd-add-group-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <Button
        variant="danger"
        size="lg"
        className="me-1"
        id="wd-add-assignment-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
    </div>
  );
}
