import React from "react";

function WarehouseForm() {
  return (
    <form className="warehouse__form">
      <div className="warehouse__details">
        <h2 className="warehouse__details-title">Warehouse Details</h2>
        <label className="warehouse__details-label">
          Warehouse Name
          <input
            className="warehouse__details-input"
            type="text"
            name="warehouseName"
            placeholder="Warehouse Name"
          />
        </label>
        <label className="warehouse__details-label">
          Street Address
          <input
            className="warehouse__details-input"
            type="text"
            name="streetAddress"
            placeholder="Street Address"
          />
        </label>
        <label className="warehouse__details-label">
          City
          <input
            className="warehouse__details-input"
            type="text"
            name="city"
            placeholder="City"
          />
        </label>
        <label className="warehouse__details-label">
          Country
          <input
            className="warehouse__details-input"
            type="text"
            name="country"
            placeholder="Country"
          />
        </label>
      </div>

      <div className="warehouse__contact">
        <h2>Contact Details</h2>
        <label className="warehouse__details-label">
          Contact Name
          <input
            className="warehouse__details-input"
            type="text"
            name="contactName"
            placeholder="Contact Name"
          />
        </label>
        <label className="warehouse__details-label">
          Position
          <input
            className="warehouse__details-input"
            type="text"
            name="position"
            placeholder="Position"
          />
        </label>
        <label className="warehouse__details-label">
          Phone Number
          <input
            className="warehouse__details-input"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </label>
        <label className="warehouse__details-label">
          Email
          <input
            className="warehouse__details-input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
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
