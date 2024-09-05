import "./InventoryItemDetails.scss";
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import mobileEdit from '../../Assets/Icons/edit-white-24px.svg'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'



function InventoryItemDetails({itemData}) {

  const [stockTag, setStockTag] = useState();
  const [itemDetails, setItemDetails] = useState({});

  const {itemId} = useParams();

  const setStock = () =>{
    if (itemDetails.quantity > 0){
      setStockTag("item-status--inStock")
    } else {
      setStockTag("item-status--outOfStock")
    }
    console.log(stockTag)
  }

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${itemId}`);
        console.log(response.data)
        setItemDetails(response.data);
        setStock();

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
            <Link to='/warehouse/:warehouseId/inventory/'><img src={backArrow} /></Link>
            <h1 className="item-title">{itemDetails.item_name}</h1>
          </div>
          <Link to="/warehouse/:warehouseId/inventory/:itemId/edit"><button className="primary-button small-button"><img src={mobileEdit}/></button></Link>
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
                  <p className={`item-status ${stockTag}`} >{itemDetails.status}</p> 
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