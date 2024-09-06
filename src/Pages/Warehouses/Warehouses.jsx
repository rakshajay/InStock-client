import { useEffect, useState } from "react";
import "./Warehouses.scss";
import axios from "axios";
import ListPage from "../../Components/shared/ListPage/ListPage";
import LinkWithArrow from "../../Components/shared/LinkWithArrow/LinkWithArrow";

function Warehouses() {
  const [warehouseList, setWarehouseList] = useState([]);

  const columns = [
    {label: 'warehouse', values: ['warehouse_name'], customRenderer: (itemData) => {
      const { id, warehouse_name} = itemData;
      return (
        <LinkWithArrow to={`/warehouse/${id}`} label={warehouse_name} />
      )
    }},
    {label: 'address', values: ['address', 'city', 'country'], customRenderer: (itemData) => {
      const {address, city, country} = itemData;
      return <p>{address}, {city}, {country}</p>
    }},
    {label: 'contact name', values: ['contact_name']},
    {label: 'contact information', values: ['contact_phone', 'contact_email']},
  ];

  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/warehouses');
        setWarehouseList(response.data);
      } catch (e) {
        console.log('error getting warehouses list', e);
      }
    }

    getWarehouseList();
  }, [])

  return (
    <ListPage 
      itemList={warehouseList}
      columns={columns}
      header='Warehouses'
      singularLabel="Warehouse"
      actionPath={'warehouse'}
    />
  );
}
  
  export default Warehouses;
  