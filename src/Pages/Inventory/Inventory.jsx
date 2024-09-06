import { useEffect, useState } from "react";
import List from "../../Components/shared/List/List";
import "./Inventory.scss";
import axios from "axios";

function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);

  const columns = [
    {label: 'inventory item', values: ['item_name']},
    {label: 'Status', values: ['status']},
    {label: 'category', values: ['category']},
    {label: 'Qty', values: ['quantity']},
    {label: 'warehouse', values: ['warehouse_id']},
  ];

  useEffect(() => {
    const getInventoryList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/inventories');
        setInventoryList(response.data);
      } catch (e) {
        console.log('error getting inventories list', e);
      }
    }

    getInventoryList();
  }, [])

  return (
    <List itemList={inventoryList} columns={columns} header='Iventory' singularLabel={'Inventory'} />
  )
}
  
  export default Inventory;
  