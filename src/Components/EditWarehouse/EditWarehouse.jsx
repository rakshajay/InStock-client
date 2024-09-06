import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../..//Assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditWarehouse() {
  const apiBaseURL = "http://localhost:8080";
  const [warehouse, setWarehouse] = useState([]);

  const { warehouseId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const seletedWarehouse = await axios.get(
          `${apiBaseURL}/warehouses/${warehouseId}`
        );
        console.log(seletedWarehouse.data);
        setWarehouse(seletedWarehouse.data);
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
        warehouse={warehouse}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditWarehouse;
