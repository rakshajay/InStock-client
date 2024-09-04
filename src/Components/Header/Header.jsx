import "./header.scss";
import logoImg from "../Assets/Logo/InStock-Logo_1x.png";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper-logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="header__wrapper-buttons">
        <Link to={"/"} className="header__link">
          <button className="header__button">Warehouses</button>
        </Link>
        <Link to={"/warehouse/:warehouseId/inventory"} className="header__link">
          <button className="header__button">Inventory</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
