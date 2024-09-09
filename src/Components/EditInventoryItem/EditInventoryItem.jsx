import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import "./EditInventoryItem.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import axios from 'axios'
import { Icon } from "../shared/Icon/Icon";

function AddNewInventory() {
  const [status, setStatus] = useState();
  const [errors, setErrors] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "inStock",
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
    item_name: "",
    description: "",
    category: "",
    quantity: "",
    warehouse_id: "",
    status: "inStock"
  });

  const navigate = useNavigate();
  const {itemId} = useParams();

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;

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
      const sendData = await axios.patch(`http://localhost:8080/inventories/${itemId}`, dataToSend);
      console.log(sendData);
      if (sendData.status === 200) {
        alert("Item edited successfully");
      }
      navigate(`/inventory/${itemId}`);
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

    const getCurrentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${itemId}`);
        console.log(response.data)
        setFormData({
          item_name: response.data.item_name || '',
          description: response.data.description || '',
          category: response.data.category || '',
          quantity: response.data.quantity || 0,
          warehouse_id: response.data.warehouse_id || 0,
          status: response.data.status || ''
        });

        setStatus(response.data.status === "Out of Stock" ? "outOfStock" : "inStock");
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
    <div>
      <div className="inventory-heading">
        <Link to={`/inventory/${itemId}`}><img src={back} alt="" /></Link>
        <h1>Edit Inventory Item</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inventory-section">
          <div className="inventory-section__details">
            <h2>Item Details</h2>
            <label>
              <h3>Item Name</h3></label>
              <input 
              type="text" 
              value= {formData.item_name}
              name="item_name" 
              onChange={(e) => handleInputChange(e)}
              onInvalid={(e) => handleOnInvalid(e, 'This field is required')}
              required
              className={errors.item_name ? 'error' : ''}

               />
               {getError(errors.item_name)}
               
            <label>
              <h3>
                Description
              </h3></label>
              <textarea
                value= {formData.description}
                className={`inventory-section__details-description ${errors.description ? 'error' : ''}`}
                name="description"
                onChange={(e) => handleInputChange(e)}
                required
                onInvalid={(e) => handleOnInvalid(e, 'This field is required')}
              ></textarea>
            {getError(errors.description)}
            <label>
              <h3>
                Category
              </h3></label>
              <select 
                name="category"
                value={formData.category}
                onChange={(e) => handleInputChange(e)}
                required
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
              {getError(errors.category)}
          </div>

          <div className="inventory-section__details inventory-section__details-lower">
            <h2>Item Availability</h2>
            <label>
              <h3>Status</h3></label>
              <div className="inventory-section__details-radio">
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={formData.status === "inStock"}
                    onChange={(e) => handleStatusChange(e)}
                  />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="inventory-section__details-radio-stock">
                  <input
                    type="radio"
                    name="status"
                    value="outOfStock"
                    checked={formData.status === "outOfStock"}
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
                onChange={(e) => handleInputChange(e)}
                required
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
