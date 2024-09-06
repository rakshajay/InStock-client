import "./WarehouseDetails.scss";
import List from "../../Components/shared/List/List";
import { Icon } from "../shared/Icon/Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LinkWithArrow from "../shared/LinkWithArrow/LinkWithArrow";
import StatusTag from "../shared/StatusTag/StatusTag";
function WarehouseDetails() {
  const navigate = useNavigate();

  const [inventoryList, setInventoryList] = useState([]);
  const [warehouse, setWarehouse]=useState({});
  const columns = [
    {label: 'inventory item', values: ['item_name'], customRenderer: (itemData) => {
      const { id, item_name} = itemData;
      return (
        <LinkWithArrow to={`/inventory/${id}`} label={item_name} />
      )
    }},
    {label: 'Status', values: ['status'], customRenderer: (itemData) => {
      console.log(itemData)
      return <StatusTag status={itemData.status} />
    
    }},
    {label: 'category', values: ['category']},
    {label: 'Qty', values: ['quantity']},
  ];

  const { warehouseId } = useParams();


  useEffect(() => {
    const getItemsInWarehouse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/warehouses/${warehouseId}/inventories`);
        setInventoryList(response.data);
      } catch (e) {
        console.log('error getting inventories list', e);
      }
    }

    const getWarehouse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/warehouses/${warehouseId}`);
        setWarehouse(response.data);
      } catch (e) {
        console.log('error getting inventories list', e);
      }
    }

    getWarehouse();

    getItemsInWarehouse();
    }, []);

    return (
      <div className="warehouse-details">
        <div className="warehouse-details__container">
          <div className="warehouse-details__header">
            <div className="warehouse-details__header-title">
              <div onClick={() => navigate(-1)} className="warehouse-details__back-button">
                <Icon iconSrc={"/src/Assets/Icons/arrow_back-24px.svg"} />
              </div>
              <h1 className="warehouse-details__title">{warehouse.warehouse_name}</h1>
            </div>
            <button className="warehouse-details__icon-button primary-button" onClick={() => navigate(`/warehouse/${warehouseId}/edit`)}>
              <Icon iconSrc={"/src/Assets/Icons/edit-white-24px.svg"} />
            </button>
          </div>
          <div className="warehouse-details__details">
            <div className="warehouse-details__contact">
              <h4>WAREHOUSE ADDRESS</h4>
              <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
            </div>
            <div className="warehouse-details__contact-details">
              <div className="warehouse-details__contact-name">
                <h4>CONTACT NAME</h4>
                <p>{warehouse.contact_name}</p>
                <p>{warehouse.contact_position}</p>
              </div>
              <div className="warehouse-details__contact-information">
                <h4>CONTACT INFORMATION</h4>
                <p>{warehouse.contact_email}</p>
                <p>{warehouse.contact_phone}</p>
              </div>
            </div>
          </div>
        </div>
        <List itemList={inventoryList} columns={columns} header='Warehouses' singularLabel="Warehouse" actionPath={'inventory'} />
      </div>
    );
  }
  
export default WarehouseDetails;