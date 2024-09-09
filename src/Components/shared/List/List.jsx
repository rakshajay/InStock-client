import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import DeleteModal from "../../../Components/DeleteModal/DeleteModal";
import "./List.scss";
import axios from "axios";

function List({ itemList, columns, actionPath }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [items, setItems] = useState(itemList);
  //console.log("actionPath", actionPath);
  //console.log(items);
  useEffect(() => {
    setItems(itemList);
  }, [itemList]);
  const warehouseNames = itemList.map((item) => item.warehouse_name);
  // console.log("warehouseNames", warehouseNames);
  const showDeleteModal = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };
  const hideDeleteModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const deleteWarehouse = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/warehouses/${id}`
      );
      console.log("Item deleted successfully");
      return response;
    } catch (error) {
      console.error(`Error deleting item: ${error}`);
    }
  };
  const deleteItemFromInventories = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/inventories/${id}`
      );
      console.log("Item deleted successfully");
      return response;
    } catch (error) {
      console.error(`Error deleting item: ${error}`);
    }
  };
  const onDeleteConfirm = async () => {
    if (itemToDelete) {
      try {
        if (actionPath === `inventory`) {
          await deleteItemFromInventories(itemToDelete.id);
        } else if (actionPath === "warehouse") {
          await deleteWarehouse(itemToDelete.id);
        }
        setItems(items.filter((item) => item.id !== itemToDelete.id));
        console.log("Item deleted successfully");
      } catch (error) {
        console.error(`Error deleting item: ${error}`);
      } finally {
        hideDeleteModal();
      }
    }
  };
  //console.log("itemToDelete.item_name", itemToDelete?.item_name);
  //console.log("itemToDelete.warehouse_name", itemToDelete?.warehouse_name);
  return (
    <div className="list">
      <div className="list__column-headers">
        {columns.map((column) => (
          <h4 key={column.label} className="list__label">
            {column.label}
          </h4>
        ))}
        <h4 key={"actions"} className="list__label list__label--centered">
          actions
        </h4>
      </div>
      <ul className="list__container">
        {items?.map((item) => (
          <li key={item.id}>
            <ListItem
              itemData={item}
              columns={columns}
              actionPath={actionPath}
              showDeleteModal={() => showDeleteModal(item)}
            />
          </li>
        ))}
      </ul>
      {isModalOpen && itemToDelete && (
        <DeleteModal
        itemName={actionPath === 'warehouse' ? itemToDelete?.warehouse_name : itemToDelete?.item_name}
          onClose={hideDeleteModal}
          actionPath={actionPath}
          onDelete={onDeleteConfirm}
        />
      )}
    </div>
  );
}

export default List;
