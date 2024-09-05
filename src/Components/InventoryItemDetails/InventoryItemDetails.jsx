import "./InventoryItemDetails.scss";
import backArrow from '../Assets/Icons/arrow_back-24px.svg'

function InventoryItemDetails() {
    return (
      <section className="main-container">
        <div className="main-container__row-top">
          <div className="main-container__row-title">
            <img src={backArrow} />
            <h1 className="item-title">Television</h1>
          </div>
          <button className="button">Edit</button>
        </div>
        <div className="main-container__row-bottom">
          <div className="main-container__info">
            <div>
              <h3>ITEM DESCRIPTION</h3>
              <p>This is an item description</p> 
            </div>
            <div>
              <h3>CATEGORY</h3>
              <p>Electronics</p> 
            </div>
          </div>
          <div className="main-container__info">
            <div className="main-container__info-split">
              <div className="main-container__info">
                <div> 
                  <h3>STATUS</h3>
                  <p>IN stock</p> 
                </div>
                <div>
                  <h3>Warehouse</h3>
                  <p>Electronics</p> 
                </div>
              </div> 
              <div className="main-container__info">
                  <h3>Quantity</h3>
                  <p>200</p> 
                </div>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
  
  export default InventoryItemDetails;