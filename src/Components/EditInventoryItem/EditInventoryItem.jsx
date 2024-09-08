import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import "./EditInventoryItem.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import axios from 'axios'

function AddNewInventory() {
  const [status, setStatus] = useState("inStock");
  const [formData, setFormData] = useState({
    item_name: '',
    description: '',
    category: '',
    quantity: 0,
    warehouse_id: 0
  });


  const {itemId} = useParams();

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const dataToSend = {
      ...formData, 
      warehouse_id: parseInt(formData.warehouse_id, 10),
      quantity: status === "outOfStock" ? 0 : parseInt(formData.quantity, 10),
      status: status === "outOfStock" ? "Out of Stock" : "In Stock",
    };
  
    try {
      const sendData = await axios.patch(`http://localhost:8080/inventories/${itemId}`, dataToSend);
      console.log(sendData);
      if (sendData.status === 200) {
        alert("Item edited successfully");
      }
    } catch (error) {
      console.error("There was an error editing the item", error.response?.data || error.message);
      alert("Failed to edit item. Please try again.");
    }
  };
  

  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {

    const getCurrentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${itemId}`);
        console.log(response.data)
        setFormData({
          item_name: response.data.item_name || '',
          description: response.data.description || '',
          category: response.data.category || '',
          quantity: response.data.quantity || 0,
          warehouse_id: response.data.warehouse_id || 0
        });
        // setFormData(response.data);
      } catch (error) {
        console.error('error getting inventory item details', error);
      }
    }
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inventories");
        const categorySet = new Set(response.data.map((item) => item.category));
        console.log(categorySet)
        setCategories([...categorySet]);

      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        console.log(response.data)
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses", error);
      }
    };
    getCurrentDetails();
    fetchCategories();
    fetchWarehouses();
  }, [])

  return (
    <div className="inventory">
      <div className="inventory-heading">
        <img src={back} alt="" />
        <h1>Edit Inventory Item</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inventory-section">
          <div className="inventory-section__details" id="border-right">
            <h2>Item Details</h2>
            <label>
              <h3>Item Name</h3></label>
              <input 
              type="text" 
              value= {formData.item_name}
              name="item_name" 
              onChange={(e) => handleInputChange(e)}
               />
            <label>
              <h3>
                Description
              </h3></label>
              <textarea
                value= {formData.description}
                className="inventory-section__details-description"
                name="description"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            
            <label>
              <h3>
                Category
              </h3></label>
              <select 
                name="category"
                value={formData.category}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled selected>
                  Please select
                </option>
                {categories.map((category, index) =>(
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
          </div>

          <div className="inventory-section__details">
            <h2>Item Availability</h2>
            <label>
              <h3>Status</h3></label>
              <div className="inventory-section__details-radio">
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={status === "inStock"}
                    onChange={(e) => handleStatusChange(e)}
                  />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="outOfStock"
                    checked={status === "outOfStock"}
                    onChange={(e) => handleStatusChange(e)}
                  />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>

              {status === "inStock" && (
              <label>
                <h3>Quantity</h3>
                <input 
                  type="number" 
                  name="quantity" 
                  value= {formData.quantity}
                  placeholder="0" 
                  onChange={(e) => handleInputChange(e)}
                  />
              </label>
            )}

            <label>
              <h3>Warehouse</h3>
              <select 
                name="warehouse_id"
                value={formData.warehouse_id}
                onChange={(e) => handleInputChange(e)}
                >
                <option value="" disabled selected>
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
          <Link to={`/inventory/${itemId}`}>
            <button type="button" className="inventory-buttons__cancel">
              Cancel
            </button>
          </Link>
          <button type="submit" className="inventory-buttons__add">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewInventory;
