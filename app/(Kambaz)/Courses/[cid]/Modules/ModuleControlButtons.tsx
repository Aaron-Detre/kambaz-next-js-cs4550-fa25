import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
export default function ModuleButtons() {
  return (
    <div>
      <GreenCheckmark />
      <Button className="bg-transparent border-0 text-black p-0">
        <BsPlus className="fs-1" />
      </Button>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
