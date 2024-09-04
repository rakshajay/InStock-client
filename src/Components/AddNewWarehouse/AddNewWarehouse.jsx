import "./AddNewWarehouse.scss";

function AddNewWarehouse() {
    return (
      <form>
        <div className="section">
          <h2>Warehouse Details</h2>
          <label>
            Warehouse Name
            <input type="text" name="warehouseName" placeholder="Warehouse Name" />
          </label>
          <label>
            Street Address
            <input type="text" name="streetAddress" placeholder="Street Address" />
          </label>
          <label>
            City
            <input type="text" name="city" placeholder="City" />
          </label>
          <label>
            Country
            <input type="text" name="country" placeholder="Country" />
          </label>
        </div>

        <div className="section">
          <h2>Contact Details</h2>
          <label>
            Contact Name
            <input type="text" name="contactName" placeholder="Contact Name" />
          </label>
          <label>
            Position
            <input type="text" name="position" placeholder="Position" />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" placeholder="Phone Number" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email" />
          </label>
        </div>

        <div className="buttons">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">+Add Warehouse</button>
        </div>
      </form>
    );
  }
  
  export default AddNewWarehouse;
  