import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../..//Assets/Icons/arrow_back-24px.svg";
//add useparams

function EditWarehouse() {
  //id??? --
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
      <WarehouseForm />
    </div>
  );
}

export default EditWarehouse;
