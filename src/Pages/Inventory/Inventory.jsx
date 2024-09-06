import { useEffect, useState } from "react";
import "./Inventory.scss";
import axios from "axios";
import ListPage from "../../Components/shared/ListPage/ListPage";
import LinkWithArrow from "../../Components/shared/LinkWithArrow/LinkWithArrow";
import StatusTag from "../../Components/shared/StatusTag/StatusTag";

function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);

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
    {label: 'warehouse', values: ['warehouse_name']},
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
    <ListPage itemList={inventoryList} columns={columns} header='Iventory' singularLabel={'Inventory'} actionPath={'warehouse'} />
  )
}
  
  export default Inventory;
  