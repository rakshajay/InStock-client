import "./DeleteInventory.scss";

function DeleteInventory() {
    return (
      <div className="delete">
      <div className="delete-notification">
        <div className="delete-notification_text">
        <h2>Delete "#"  inventory item?</h2>
        <p>Please confirm that you’d like to delete "#" from the inventory list.
        You won’t be able to undo this action.</p>
        </div>
        <div className="delete-notification_buttons">
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
    );
  }
  
  export default DeleteInventory;
  