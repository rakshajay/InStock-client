import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "/src/Assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditWarehouse() {
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

  const { warehouseId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEditedWarehouse = {
      warehouse_name: warehouseName,
      address: warehouseAddress,
      city: warehouseCity,
      country: warehouseCountry,
      contact_name: warehouseContactName,
      contact_position: warehousePosition,
      contact_phone: warehousePhone,
      contact_email: warehouseEmail,
    };

    const editedWarehouse = await axios.patch(
      `${apiBaseURL}/warehouses/${warehouseId}`,
      newEditedWarehouse
    );

    navigate("/");
    return alert("Changes saved, you will be redirected to Home");
  };

  const handleCancel = async (e) => {
    navigate(`/warehouse/${warehouseId}`);
    return alert("Changes cancelled, you will be redirected to the warehouse");
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
        <Link to="/warehouses" className="warehouse__link">
          <img
            className="warehouse__icon"
            src={arrowImage}
            alt="Arrow Icon to go previous page"
          />
        </Link>
        <h2 className="warehouse__title">Edit Warehouse</h2>
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

export default EditWarehouse;
