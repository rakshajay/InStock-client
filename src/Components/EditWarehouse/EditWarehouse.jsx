import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../..//Assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// cancel button should clear form

function EditWarehouse() {
  const apiBaseURL = "http://localhost:8080";

  const [warehouseName, setWarehouseName] = useState([]);
  const [warehouseAddress, setWarehouseAddress] = useState([]);
  const [warehouseCity, setWarehouseCity] = useState([]);
  const [warehouseCountry, setWarehouseCountry] = useState([]);
  const [warehouseContactName, setWarehouseContactName] = useState([]);
  const [warehousePosition, setWarehousePosition] = useState([]);
  const [warehousePhone, setWarehousePhone] = useState([]);
  const [warehouseEmail, setWarehouseEmail] = useState([]);

  const { warehouseId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.name);

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

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const seletedWarehouse = await axios.get(
          `${apiBaseURL}/warehouses/${warehouseId}`
        );

        setWarehouseName(seletedWarehouse.data.warehouse_name);
        setWarehouseAddress(seletedWarehouse.data.address);
        setWarehouseCity(seletedWarehouse.data.city);
        setWarehouseCountry(seletedWarehouse.data.country);
        setWarehouseContactName(seletedWarehouse.data.contact_name);
        setWarehousePosition(seletedWarehouse.data.contact_position);
        setWarehousePhone(seletedWarehouse.data.contact_phone);
        setWarehouseEmail(seletedWarehouse.data.contact_email);
      } catch (e) {
        console.log("error getting warehouses list", e);
      }
    };

    getWarehouse();
  }, []);

  return (
    <div className="warehouse__edit">
      <div className="warehouse__wrapper">
        <img
          className="warehouse__icon"
          src={arrowImage}
          alt="Arrow Icon to go previous page"
        />
        <h2 className="warehouse__title">Edit Warehouse</h2>
      </div>
      <WarehouseForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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

export default EditWarehouse;
