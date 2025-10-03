import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../GreenCheckmark";
import { RxCircleBackslash } from "react-icons/rx";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-xl-flex">
      <div>
        <Button
          className="mb-2"
          id="wd-view-progress"
          variant="secondary"
          size="lg"
        >
          View Progress
        </Button>
        <Button
          className="mb-2"
          id="wd-collapse-all"
          variant="secondary"
          size="lg"
        >
          Collapse All
        </Button>
      </div>
      <div className="wd-flex-gap"></div>
      <div className="d-xxl-flex">
        <Button
          variant="danger"
          size="lg"
          className="me-2 mb-2"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Module
        </Button>
        <Dropdown className="me-2">
          <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
            <GreenCheckmark /> Publish All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="wd-publish-all">
              <GreenCheckmark /> Publish All
            </DropdownItem>
            <DropdownItem id="wd-publish-all-modules-and-items">
              <GreenCheckmark /> Publish all modules and items
            </DropdownItem>
            <DropdownItem id="wd-publish-modules-only">
              <GreenCheckmark /> Publish modules only
            </DropdownItem>
            <DropdownItem id="wd-unpublish-all-modules-and-items">
              <RxCircleBackslash className="me-1 fs-5" /> Unpublish all modules
              and items
            </DropdownItem>
            <DropdownItem id="wd-unpublish-modules-only">
              <RxCircleBackslash className="me-1 fs-5" /> Unpublish modules only
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
