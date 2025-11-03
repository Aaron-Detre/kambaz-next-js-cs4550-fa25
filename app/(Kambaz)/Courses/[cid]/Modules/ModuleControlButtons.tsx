import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { FaPencil, FaTrash } from "react-icons/fa6";
export default function ModuleButtons({
  moduleId,
  deleteModule,
  editModule,
}: Readonly<{
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}>) {
  return (
    <div>
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
      />
      <GreenCheckmark />
      <Button className="bg-transparent border-0 text-black p-0">
        <BsPlus className="fs-1" />
      </Button>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
