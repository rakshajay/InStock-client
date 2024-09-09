import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Inventory from "./Pages/Inventory/Inventory";
import AddNewInventory from "./Components/AddNewInventory/AddNewInventory";
import InventoryItemDetails from "./Components/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";
import AddNewWarehouse from "./Components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import Warehouses from "./Pages/Warehouses/Warehouses";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";

// import xyz component from 'component'...


function App() {
  return (

      <BrowserRouter>
        <Header />
          <div id="app__body">
            <div className="app__container">
              <Routes>
                <Route 
                  path="/"
                  element={<Warehouses />}
                />
                <Route 
                  path="/warehouse/add" 
                  element={<AddNewWarehouse />} 
                />
                <Route 
                  path="/warehouse/:warehouseId" 
                  element={<WarehouseDetails />}
                />
                <Route 
                  path="/warehouse/:warehouseId/edit"
                  element={<EditWarehouse />}
                />              
                <Route 
                  path="/inventory"
                  element={<Inventory />}
                />
                <Route
                  path="/inventory/add"
                  element={<AddNewInventory />}
                />              
                <Route
                  path="/inventory/:itemId"
                  element={<InventoryItemDetails />}
                />
                <Route
                  path="/inventory/:itemId/edit"
                  element={<EditInventoryItem />}
                />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
            </div>
          </div>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;