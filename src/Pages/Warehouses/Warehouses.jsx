import { useEffect, useState } from "react";
import "./Warehouses.scss";
import axios from "axios";
import ListPage from "../../Components/shared/ListPage/ListPage";
import { Link } from "react-router-dom";

function Warehouses() {
  const [warehouseList, setWarehouseList] = useState([]);
  const columns = [
    {
      label: "warehouse",
      values: ["warehouse_name"],
      customRenderer: (itemData) => {
        const { id, warehouse_name } = itemData;
        return (
          <Link key={id} to={`/warehouse/${id}`}>
            {warehouse_name}
          </Link>
        );
      },
    },
    { label: "contact name", values: ["contact_name"] },
    { label: "address", values: ["address", "city", "country"] },
    {
      label: "contact information",
      values: ["contact_phone", "contact_email"],
    },
  ];

  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouseList(response.data);
      } catch (e) {
        console.log("error getting warehouses list", e);
      }
    };

    getWarehouseList();
  }, []);

  return (
    <ListPage
      itemList={warehouseList}
      columns={columns}
      header="Warehouses"
      singularLabel="Warehouse"
    />
  );
}

export default Warehouses;
