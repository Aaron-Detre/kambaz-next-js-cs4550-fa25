import { IoEllipsisVertical } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsGroupControlButtons({
  percent,
}: {
  percent: Readonly<number>;
}) {
  return (
    <div
      id="wd-assignments-group-control-buttons"
      className="d-flex align-items-center"
    >
      <div id="wd-assignment-group-completion">{percent}% of Total</div>
      <Button className="bg-transparent border-0 text-black p-0">
        <BsPlus className="fs-1" />
      </Button>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
