import "./InventoryItemDetails.scss";
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import mobileEdit from '../../Assets/Icons/edit-white-24px.svg'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import StatusTag from "../shared/StatusTag/StatusTag";



function InventoryItemDetails() {

  const [itemDetails, setItemDetails] = useState({});

  const {itemId} = useParams();

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${itemId}`);
        console.log(response.data)
        setItemDetails(response.data);

      } catch (e) {
        console.log('error getting inventory item details', e);
      }
    }

    getItemDetails();
  }, [])


    return (
      <section className="main-container">
        <div className="main-container__row-top">
          <div className="main-container__row-title">
            <Link to={`/warehouse/${itemDetails.warehouse_id}`}><img src={backArrow} /></Link>
            <h1 className="item-title">{itemDetails.item_name}</h1>
          </div>
          <Link to="/inventory/:itemId/edit"><button className="primary-button edit-button">
            <img className="edit-icon" src={mobileEdit}/>
            <p className="button-text">Edit</p>
            </button></Link>
        </div>
        <div className="main-container__row-bottom">
          <div className="main-container__info-left">
            <div>
              <p className="item-subheader">Item Description:</p>
              <p>{itemDetails.description}</p> 
            </div>
            <div>
              <p className="item-subheader">Category:</p>
              <p>{itemDetails.category}</p> 
            </div>
          </div>
          <div className="main-container__info-right">
            <div className="main-container__info-split">
              <div className="main-container__info-right">
                <div> 
                  <p className="item-subheader">Status:</p>
                  <StatusTag status={itemDetails.status} />
                </div>
                <div>
                  <p className="item-subheader">Warehouse:</p>
                  <p>{itemDetails.warehouse_name}</p> 
                </div>
              </div> 
              <div className="main-container__item-quantity">
                <p className="item-subheader">Quantity:</p>
                  <p>{itemDetails.quantity}</p> 
                </div>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
  
  export default InventoryItemDetails;