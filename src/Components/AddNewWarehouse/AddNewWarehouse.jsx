import "./AddNewWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../Assets/Icons/arrow_back-24px.svg";

function AddNewWarehouse() {
  return (
    <div>
      <img src={arrowImage} alt="Arrow Icon to go previous page" />
      <h2>Add New Warehouse</h2>
      <WarehouseForm />
    </div>
  );
}

export default AddNewWarehouse;
