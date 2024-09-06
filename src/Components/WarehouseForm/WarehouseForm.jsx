import React, { useEffect } from "react";
import "./WarehouseForm.scss";
import { useLocation, Navigate } from "react-router-dom";

function WarehouseForm({
  handleSubmit,
  handleChange,
  handleCancel,
  warehouseName,
  warehouseAddress,
  warehouseCity,
  warehouseCountry,
  warehouseContactName,
  warehousePosition,
  warehousePhone,
  warehouseEmail,
}) {
  let location = useLocation();

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    handleSubmit(e);
  };

  const btnText = location.pathname.includes("edit")
    ? "Save"
    : "+Add Warehouse";

  return (
    <form className="warehouse__form" onSubmit={(e) => handleSubmitButton(e)}>
      <div className="warehouse__details">
        <h2 className="warehouse__details-title">Warehouse Details</h2>
        <label className="warehouse__details-label">Warehouse Name</label>
        <input
          value={warehouseName}
          className="warehouse__details-input"
          type="text"
          name="warehouseName"
          placeholder="Warehouse Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Street Address</label>
        <input
          value={warehouseAddress}
          className="warehouse__details-input"
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">City</label>
        <input
          value={warehouseCity}
          className="warehouse__details-input"
          type="text"
          name="city"
          placeholder="City"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Country</label>
        <input
          value={warehouseCountry}
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
          value={warehouseContactName}
          className="warehouse__details-input"
          type="text"
          name="contactName"
          placeholder="Contact Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Position</label>
        <input
          value={warehousePosition}
          className="warehouse__details-input"
          type="text"
          name="position"
          placeholder="Position"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Phone Number</label>
        <input
          value={warehousePhone}
          className="warehouse__details-input"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="warehouse__details-label">Email</label>
        <input
          value={warehouseEmail}
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
          onClick={handleCancel}
        >
          Cancel
        </button>

        <button
          className="warehouse__button-submit warehouse__button"
          type="submit"
        >
          {btnText}
        </button>
      </div>
    </form>
  );
}

export default WarehouseForm;
