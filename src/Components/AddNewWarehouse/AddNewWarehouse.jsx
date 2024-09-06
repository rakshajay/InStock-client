import "./AddNewWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../../Assets/Icons/arrow_back-24px.svg";
import axios from "axios";

function AddNewWarehouse() {
  const apiBaseURL = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.warehouseName.value);
    const newWarehouse = {
      warehouse_name: e.target.warehouseName.value,
      address: e.target.streetAddress.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact_name: e.target.contactName.value,
      contact_position: e.target.position.value,
      contact_phone: e.target.phoneNumber.value,
      contact_email: e.target.email.value,
    };

    const updatedWarehouse = await axios.post(
      `${apiBaseURL}/warehouses`,
      newWarehouse
    );

    console.log(updatedWarehouse);
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
      <WarehouseForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddNewWarehouse;
