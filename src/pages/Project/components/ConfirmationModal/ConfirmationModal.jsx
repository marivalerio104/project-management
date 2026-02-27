import "./ConfirmationModal.css"
import Button from "../../../../components/Button/Button";

export default function ConfirmationModal({ ref, description, onConfirm }) {
  return <dialog ref={ref}>
    <p>{description}</p>
    <form method="dialog">
      <Button variant="outline">Cancel</Button>
      <Button onClick={onConfirm}>Delete</Button>
    </form>
  </dialog>
}