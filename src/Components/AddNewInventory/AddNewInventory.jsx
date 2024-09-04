import "./AddNewInventory.scss";

function AddNewInventory() {
    return (
      <div className="add-inventory-item-form">
      <h1>Add New Inventory Item</h1>

      <form>
        <div className="section">
          <h2>Item Details</h2>
          <label>
            Item Name
            <input type="text" name="itemName" placeholder="Item Name" />
          </label>
          <label>
            Description
            <textarea name="description" placeholder="Please enter a brief item description..."></textarea>
          </label>
          <label>
            Category
            <select name="category">
              <option value="" disabled selected>Please select</option>
              <option value="" disabled selected>Please select</option>
            </select>
          </label>
        </div>

        <div className="section">
          <h2>Item Availability</h2>
          <label>
            Status
            <div>
              <input type="radio" name="status" value="inStock" />
              <label htmlFor="inStock">In stock</label>
              <input type="radio" name="status" value="outOfStock" />
              <label htmlFor="outOfStock">Out of stock</label>
            </div>
          </label>
          <label>
            Quantity
            <input type="number" name="quantity" placeholder="0" />
          </label>
          <label>
            Warehouse
            <select name="warehouse">
              <option value="" disabled selected>Please select</option>
            </select>
          </label>
        </div>

        <div className="buttons">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">+ Add Item</button>
        </div>
      </form>
    </div>
    );
  }
  
  export default AddNewInventory;
  