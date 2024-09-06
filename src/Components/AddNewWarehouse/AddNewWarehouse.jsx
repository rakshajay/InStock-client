import "./AddNewWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../../Assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewWarehouse() {
  const apiBaseURL = "http://localhost:8080";
  const navigate = useNavigate();

  const [warehouseName, setWarehouseName] = useState([]);
  const [warehouseAddress, setWarehouseAddress] = useState([]);
  const [warehouseCity, setWarehouseCity] = useState([]);
  const [warehouseCountry, setWarehouseCountry] = useState([]);
  const [warehouseContactName, setWarehouseContactName] = useState([]);
  const [warehousePosition, setWarehousePosition] = useState([]);
  const [warehousePhone, setWarehousePhone] = useState([]);
  const [warehouseEmail, setWarehouseEmail] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWarehouse = {
      warehouse_name: warehouseName,
      address: warehouseAddress,
      city: warehouseCity,
      country: warehouseCountry,
      contact_name: warehouseContactName,
      contact_position: warehousePosition,
      contact_phone: warehousePhone,
      contact_email: warehouseEmail,
    };

    const updatedWarehouse = await axios.post(
      `${apiBaseURL}/warehouses`,
      newWarehouse
    );

    navigate("/");
    return alert("Warehouse added, you will be redirected to Home");
  };

  const handleCancel = async (e) => {
    setWarehouseName("");
    setWarehouseAddress("");
    setWarehouseCity("");
    setWarehouseCountry("");
    setWarehouseContactName("");
    setWarehousePosition("");
    setWarehousePhone("");
    setWarehouseEmail("");

    navigate("/warehouses");
    return alert(
      "Your warehouse was not added, you will be redirected to Warehouses"
    );
  };

  const handleChange = (e) => {
    if (e.target.name === "warehouseName") {
      setWarehouseName(e.target.value);
    } else if (e.target.name === "streetAddress") {
      setWarehouseAddress(e.target.value);
    } else if (e.target.name === "city") {
      setWarehouseCity(e.target.value);
    } else if (e.target.name === "country") {
      setWarehouseCountry(e.target.value);
    } else if (e.target.name === "contactName") {
      setWarehouseContactName(e.target.value);
    } else if (e.target.name === "position") {
      setWarehousePosition(e.target.value);
    } else if (e.target.name === "phoneNumber") {
      setWarehousePhone(e.target.value);
    } else if (e.target.name === "email") {
      setWarehouseEmail(e.target.value);
    }
  };

  return (
    <div className="warehouse__add">
      <div className="warehouse__wrapper">
        <img
          className="warehouse__icon"
          src={arrowImage}
          alt="Arrow Icon to go previous page"
        />
        <h2 className="warehouse__title">Add New Warehouse</h2>
      </div>
      <WarehouseForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        warehouseName={warehouseName}
        warehouseAddress={warehouseAddress}
        warehouseCity={warehouseCity}
        warehouseCountry={warehouseCountry}
        warehouseContactName={warehouseContactName}
        warehousePosition={warehousePosition}
        warehousePhone={warehousePhone}
        warehouseEmail={warehouseEmail}
      />
    </div>
  );
}

export default AddNewWarehouse;
