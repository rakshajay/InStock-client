import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";

function DeleteModal() {
    return (
      <div className="background">
         <div className="delete">
        <div className="delete-close">
          <img src={close} alt="close-icon"/>
        </div>
        <div className="delete-notification">
          <div className="delete-notification_text">
          <h1>Delete "#"  "#"?</h1>
          <p>Please confirm that you’d like to delete the "#" from the "#". You won’t be able to undo this action.</p>
          </div>
          <div className="delete-notification_buttons">
            <button className="delete-notification_buttons-cancel">Cancel</button>
            <button className="delete-notification_buttons-delete">Delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default DeleteModal;