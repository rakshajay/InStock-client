import { useEffect, useState } from "react";
import "./AddNewInventory.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { Icon } from "../shared/Icon/Icon";

function AddNewInventory() {

  const [errors, setErrors] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  })

  const getError = (errorMessage) => {
    return (
      errorMessage && (
        <div className="inventory-section__error-text">
          <Icon iconSrc={'/src/Assets/Icons/error-24px.svg'}/> <p>{errorMessage}</p>
        </div>
      )
    )
  }

  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "inStock",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if(value === '') {
      handleOnInvalid(name)
    } else {
      handleOnInvalid(name, '')
    }

    if(name === 'quantity' && value === '0' && formData.status === 'inStock') {
      handleOnInvalid('quantity', "Quantity can't be set 0 if status is In Stock")
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnInvalid = (fieldName, message = 'This field is required') => {
    setErrors({
      ...errors,
      [fieldName]: message,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const dataToSend = {
      ...formData,
      warehouse_id: parseInt(formData.warehouse_id),
      quantity: formData.status ? parseInt(formData.quantity) : 0,
      status: formData.status ? "In Stock": "Out of Stock",
    };
  
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
      if (!formData.warehouse_id || 
          !formData.item_name || 
          !formData.description ||
          !formData.category ||
          !formData.status
        ) {
        alert("Please make sure all required fields are filled out.")
      }
      if(status != "outOfStock" && formData.quantity === 0){
        alert("Please provide a quantity greater than 0.")
      }; 
    }
  };
  
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inventories");
        const categorySet = new Set(response.data.map((item) => item.category));
        setCategories([...categorySet]);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouses(response.data);
        const firstWarehouseId=response.data[0].id;
        setFormData({
          ...formData,
          warehouse_id: firstWarehouseId,
        });

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
      <Link to="/inventory"><img src={back} alt="back-icon" /></Link>
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
              onInvalid={(e) => handleOnInvalid(e, 'This field is required')}
              required
              className={errors.item_name ? 'error' : ''}
            />
            {getError(errors.item_name)}

            <label>
              <h3>Description</h3>
            </label>
            <textarea
              className={`inventory-section__details-description ${errors.description ? 'error' : ''}`}
              name="description"
              placeholder="Please enter a brief item description..."
              value={formData.description}
              onChange={handleInputChange}
              required
              onInvalid={(e) => handleOnInvalid(e, 'This field is required')}
            ></textarea>
            {getError(errors.description)}

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
              {getError(errors.category)}
            </label>
          </div>

          <div className="inventory-section__details inventory-section__details-lower">
            <h2>Item Availability</h2>
            <label>
              <h3>Status</h3>
              <div className="inventory-section__details-radio">
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value={"inStock"}
                    checked={formData.status === 'inStock'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value={"outOfStock"}
                    checked={formData.status === 'outOfStock'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>
            </label>

            {formData.status === "inStock" && (
              <label>
                <h3>Quantity</h3>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required={formData.status === 'inStock'}
                  className={`${errors.quantity ? 'error' : ''}`}
                />
                {getError(errors.quantity)}
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
