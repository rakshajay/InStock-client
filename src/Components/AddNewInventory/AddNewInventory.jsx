import { useEffect, useState } from "react";
import "./AddNewInventory.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function AddNewInventory() {
  const [status, setStatus] = useState("inStock");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const [formData, setFormData] = useState({
    warehouse_id: 0,
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const dataToSend = {
      ...formData,
      warehouse_id: parseInt(formData.warehouse_id),
      quantity: status === "outOfStock" ? 0 : parseInt(formData.quantity), 
      status: status === "outOfStock" ? "Out of Stock" : "In Stock",
    };
    //console.log("Sending data:", dataToSend);
  
    try {
      const sendData = await axios.post("http://localhost:8080/inventories", dataToSend);
      if (sendData.status === 201) {
        alert("Item added successfully");
        setFormData({
          warehouse_id: "",
          item_name: "",
          description: "",
          category: "",
          status: "",
          quantity: 0,
        });
      }
    } catch (error) {
      console.error("There was an error adding the item", error);
      alert("Failed to add item. Please try again.");
    }
  };
  
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inventories");
        const categorySet = new Set(response.data.map((item) => item.category.toLowerCase()));
        setCategories([...categorySet]);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses", error);
      }
    };

    fetchCategories();
    fetchWarehouses();
  }, []);

  return (
    <div className="inventory">
      <div className="inventory-heading">
        <img src={back} alt="back-icon" />
        <h1>Add New Inventory Item</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inventory-section">
          <div className="inventory-section__details" id="border-right">
            <h2>Item Details</h2>
            <label>
              <h3>Item Name</h3>
            </label>
            <input
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={formData.item_name}
              onChange={handleInputChange}
            />

            <label>
              <h3>Description</h3>
            </label>
            <textarea
              className="inventory-section__details-description"
              name="description"
              placeholder="Please enter a brief item description..."
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>

            <label>
              <h3>Category</h3>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Please select
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="inventory-section__details">
            <h2>Item Availability</h2>
            <label>
              <h3>Status</h3>
              <div className="inventory-section__details-radio">
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={status === "inStock"}
                    onChange={handleStatusChange}
                  />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="outOfStock"
                    checked={status === "outOfStock"}
                    onChange={handleStatusChange}
                  />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>
            </label>

            {status === "inStock" && (
              <label>
                <h3>Quantity</h3>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </label>
            )}

            <label>
              <h3>Warehouse</h3>
              <select
                name="warehouse_id"
                value={formData.warehouse_id}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Please select
                </option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="inventory-buttons">
          <div><Link to="/inventory">
            <button type="button" className="inventory-buttons__cancel">
              Cancel
            </button>
          </Link></div>
          <div><button type="submit" className="inventory-buttons__add">
            + Add Item
          </button></div>
        </div>
      </form>
    </div>
  );
}

export default AddNewInventory;
