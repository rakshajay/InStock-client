import { useState } from "react";
import "./AddNewInventory.scss";
import back from "../../assets/icons/arrow_back-24px.svg";

function AddNewInventory() {
  const [status, setStatus] = useState("inStock");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="inventory">
      <div className="inventory-heading">
        <img src={back} alt="" />
        <h1>Add New Inventory Item</h1>
      </div>

      <form>
        <div className="inventory-section">
          <div className="inventory-section__details" id="border-right">
            <h2>Item Details</h2>
            <label>
              <h3>Item Name</h3>
              <input type="text" name="itemName" placeholder="Item Name" />
            </label>
            <label>
              <h3>
                Description <br />
              </h3>
              <textarea
                className="inventory-section__details-description"
                name="description"
                placeholder="Please enter a brief item description..."
              ></textarea>
            </label>
            <label>
              <h3>
                Category <br />
              </h3>
              <select name="category">
                <option value="" disabled selected>
                  Please select
                </option>
              </select>
            </label>
          </div>

          <div className="inventory-section__details">
            <h2>Item Availability</h2>
            <label>
              <h3>Status</h3>
              <div className="inventory-section__details-radio">
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={status === "inStock"}
                    onChange={handleStatusChange}
                  />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="outOfStock"
                    checked={status === "outOfStock"}
                    onChange={handleStatusChange}
                  />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>
            </label>

            {status === "inStock" && (
              <label>
                <h3>Quantity</h3>
                <input type="number" name="quantity" placeholder="0" />
              </label>
            )}

            <label>
              <h3>Warehouse</h3>
              <select name="warehouse">
                <option value="" disabled selected>
                  Please select
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="inventory-buttons">
          <button type="button" className="inventory-buttons__cancel">
            Cancel
          </button>
          <button type="submit" className="inventory-buttons__add">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewInventory;
