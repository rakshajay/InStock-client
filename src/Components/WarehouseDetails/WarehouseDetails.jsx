import "./WarehouseDetails.scss";
import List from "../../Components/shared/List/List";
import { Icon } from "../shared/Icon/Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function WarehouseDetails() {
  const [inventoryList, setInventoryList] = useState([]);
  const [warehouse, setWarehouse] = useState({});
  const columns = [
    { label: "inventory item", values: ["item_name"] },
    { label: "Status", values: ["status"] },
    { label: "category", values: ["category"] },
    { label: "Qty", values: ["quantity"] },
  ];

  const { warehouseId } = useParams();

  useEffect(() => {
    const getItemsInWarehouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}/inventories`
        );
        setInventoryList(response.data);
      } catch (e) {
        console.log("error getting inventories list", e);
      }
    };

    const getWarehouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );
        setWarehouse(response.data);
        console.log(response);
      } catch (e) {
        console.log("error getting inventories list", e);
      }
    };

    getWarehouse();

    getItemsInWarehouse();
  }, []);

  return (
    <>
      <div className="warehouse-details">
        <div className="warehouse-details__container">
          <div className="warehouse-details__header">
            <div>
              <img
                className="warehouse__icon"
                src="../../src/Assets/Icons/arrow_back-24px.svg"
                alt="Arrow Icon to go previous page"
              />
              <h1 className="warehouse-details__title">
                {warehouse.warehouse_name}
              </h1>
            </div>
            <div>
              <Icon iconSrc={"/src/Assets/Icons/edit-24px.svg"} />
            </div>
          </div>
          <div className="warehouse-details__contact">
            <p className="warehouse-details__contact-title">
              WAREHOUSE ADDRESS
            </p>
            <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
          </div>
          <div className="warehouse-details__contact-details">
            <div className="warehouse-details__contact-name">
              <p className="warehouse-details__contact-title">CONTACT NAME</p>
              <p>{warehouse.contact_name}</p>
              <p>{warehouse.contact_position}</p>
            </div>
            <div className="warehouse-details__contact-information">
              <p className="warehouse-details__contact-title">
                CONTACT INFORMATION
              </p>
              <p>{warehouse.contact_email}</p>
              <p>{warehouse.contact_phone}</p>
            </div>
          </div>
        </div>
        <List
          itemList={inventoryList}
          columns={columns}
          header="Warehouses"
          singularLabel="Warehouse"
        />
      </div>
    </>
  );
}

export default WarehouseDetails;
