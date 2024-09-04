import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../Assets/Icons/arrow_back-24px.svg";

function EditWarehouse() {
  return (
    <div>
      <img src={arrowImage} alt="Arrow Icon to go previous page" />
      <h2>Edit Warehouse</h2>
      <WarehouseForm />
    </div>
  );
}

export default EditWarehouse;
