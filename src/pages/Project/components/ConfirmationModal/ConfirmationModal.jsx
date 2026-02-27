import "./ConfirmationModal.css"
import { createPortal } from "react-dom";
import Button from "../../../../components/Button/Button";

export default function ConfirmationModal({ ref, description, onConfirm }) {
  return createPortal(
    <dialog ref={ref}>
      <p>{description}</p>
      <form method="dialog">
        <Button type="submit" variant="outline">Cancel</Button>
        <Button onClick={onConfirm}>Accept</Button>
      </form>
    </dialog>, document.getElementById("modal-root")
  );
}