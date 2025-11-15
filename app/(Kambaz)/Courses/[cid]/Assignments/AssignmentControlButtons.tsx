import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
// import { deleteAssignment } from "./reducer";
// import { AppDispatch } from "@/app/(Kambaz)/store";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
export default function AssignmentControlButtons({
  assignment,
  onDeleteAssignment,
}: Readonly<{ assignment: any; onDeleteAssignment: any }>) {
  const [showDialog, setShowDialog] = useState(false);
  // const dispatch: AppDispatch = useDispatch();
  // const del = () => dispatch(deleteAssignment(assignmentId));
  const handleClose = () => setShowDialog(false);
  const handleShow = () => setShowDialog(true);
  return (
    <div id="wd-assignments-group-control-buttons" className="d-flex ms-2">
      <FaTrash
        className="text-danger me-2 mb-1 wd-cursor-pointer"
        onClick={handleShow}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignmentDialog
        show={showDialog}
        handleClose={handleClose}
        dialogTitle="Delete Assignment"
        deleteAssignment={() => onDeleteAssignment(assignment)}
      />
    </div>
  );
}
