import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import arrowImage from "../Assets/Icons/arrow_back-24px.svg";

function EditWarehouse() {
  return (
    <>
      <div>
        <img src={arrowImage} alt="Arrow Icon to go previous page" />
        <h2>Edit Warehouse</h2>
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
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditWarehouse;
