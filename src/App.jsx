import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
// import xyz component from 'component'...

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="app__body">
          <Routes>
            <Route path="/" element={<WarehouseList />} />
            <Route
              path="/warehouse/:warehouseId"
              element={<WarehouseDetails />}
            />
            <Route
              path="/warehouse/:warehouseId/edit"
              element={<WarehouseEdit />}
            />
            <Route path="/warehouse/add" element={<WarehouseCreate />} />
            <Route
              path="/warehouse/:warehouseId/inventory"
              element={<Inventory />}
            />
            <Route
              path="/warehouse/:warehouseId/inventory/:itemId"
              element={<ItemDetails />}
            />
            <Route
              path="/warehouse/:warehouseId/inventory/:itemId/edit"
              element={<ItemEdit />}
            />
            <Route
              path="/warehouse/:warehouseId/inventory/add"
              element={<ItemAdd />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
