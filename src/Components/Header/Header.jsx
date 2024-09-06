import "./header.scss";
import logoImg from "/src/Assets/Logo/InStock-Logo_1x.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const route = location.pathname.includes("inventory")
    ? "inventory"
    : "warehouses";

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   console.log(location);

  //   if (e.target.innerText.includes("Warehouses")) {
  //   }
  // };

  return (
    <header className="header">
      <div className="header__wrapper-logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="header__wrapper-buttons">
        <Link to={"/"} className="header__link">
          <button
            className={`header__button ${
              route === "warehouses" ? "active-button" : ""
            }`}
          >
            Warehouses
          </button>
        </Link>
        <Link to={"/inventory"} className="header__link">
          <button
            className={`header__button ${
              route === "inventory" ? "active-button" : ""
            }`}
          >
            Inventory
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
