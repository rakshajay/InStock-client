import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";

function DeleteModal({ type, itemName, onClose, onDelete, actionPath }) {
  const itemType = type === "warehouse" ? "warehouse" : "inventory item";

  return (
    <div className="background">
      <div className="delete">
        <div className="delete-close">
          <img src={close} alt="close-icon" onClick={onClose} />
        </div>
        <div className="delete-notification">
          <div className="delete-notification_text">
            <h1>
              Delete {itemName}{" "}
              {actionPath === "inventory" ? "inventory item" : actionPath}?
            </h1>
            <p>
              Please confirm that you’d like to delete {itemName} from the{" "}
              {actionPath === "inventory" ? "inventory list" : actionPath}. You
              won’t be able to undo this action.
            </p>
          </div>
          <div className="delete-notification_buttons">
            <button
              className="delete-notification_buttons-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="delete-notification_buttons-delete"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
