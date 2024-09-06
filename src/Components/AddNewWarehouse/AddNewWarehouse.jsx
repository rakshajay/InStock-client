import "./AddNewWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../../Assets/Icons/arrow_back-24px.svg";

function AddNewWarehouse() {
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
      <WarehouseForm />
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
    </div>
  );
}

export default AddNewWarehouse;
