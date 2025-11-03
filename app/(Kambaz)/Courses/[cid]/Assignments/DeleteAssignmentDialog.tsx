import { Modal, FormControl, Button } from "react-bootstrap";
export default function DeleteAssignmentDialog({
  show,
  handleClose,
  dialogTitle,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  deleteAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteAssignment();
            handleClose();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
