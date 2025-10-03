import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div id="wd-assignments-group-control-buttons" className="d-flex ms-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
