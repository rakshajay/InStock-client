import React from "react";
import "./WarehouseForm.scss";

function WarehouseForm({ handleSubmit, warehouse }) {
  const handleSubmitButton = async (e) => {
    e.preventDefault();

    handleSubmit(e);
  };

  return (
    <form className="warehouse__form" onSubmit={(e) => handleSubmitButton(e)}>
      <div className="warehouse__details">
        <h2 className="warehouse__details-title">Warehouse Details</h2>
        <label className="warehouse__details-label">Warehouse Name</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="warehouseName"
          placeholder="Warehouse Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Street Address</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">City</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="city"
          placeholder="City"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Country</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="country"
          placeholder="Country"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <div className="warehouse__contact">
        <h2 className="warehouse__details-title">Contact Details</h2>
        <label className="warehouse__details-label">Contact Name</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="contactName"
          placeholder="Contact Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Position</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="position"
          placeholder="Position"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Phone Number</label>
        <input
          className="warehouse__details-input"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Email</label>
        <input
          className="warehouse__details-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="warehouse__buttons">
        <button
          className="warehouse__button-cancel warehouse__button"
          type="button"
        >
          Cancel
        </button>
        <button
          className="warehouse__button-submit warehouse__button"
          type="submit"
        >
          +Add Warehouse
        </button>
      </div>
    </form>
  );
}

export default WarehouseForm;
