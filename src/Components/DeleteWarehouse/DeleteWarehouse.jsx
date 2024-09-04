import "./DeleteWarehouse.scss";

function DeleteWarehouse() {
    return (
      <div className="delete">
        <div className="delete-notification">
          <div className="delete-notification_text">
          <h2>Delete "#"  warehouse?</h2>
          <p>Please confirm that you’d like to delete the "#" from the list of warehouses. You won’t be able to undo this action.</p>
          </div>
          <div className="delete-notification_buttons">
            <button>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default DeleteWarehouse;