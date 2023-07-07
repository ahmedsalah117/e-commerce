import React, { useContext } from "react";
import Logo from "../Logo/Logo.jsx";
import navIcon from "./../../Utils/images/navIcon.png";
import userIcon from "./../../Utils/images/userIcon.png";
import searchIcon from "./../../Utils/images/searchIcon.png";
import cartIcon from "./../../Utils/images/cartIcon.png";
import { cartContext } from "../../Store/CartContext.js";
import { mainContext } from "../../Store/MainContext.js";
import { Link } from "react-router-dom";
import logoImg from "./../../Utils/images/logo.png";
function Navbar() {
  const cartContextData = useContext(cartContext);
  const cartProductsCount = cartContextData.cartCount;
  const mainContextData = useContext(mainContext);

  function openCartHandler() {
    mainContextData.setOpenCart((prevState) => !prevState);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav__holder ">
          <img src={navIcon} alt="navbar icon" className="nav__icon" />
          {/* <Link className="navbar-brand p-2" to="/">
            <Logo classes={"logo--nav"} />
          </Link> */}
          <Link to="/">
            <img src={logoImg} alt="website logo" className="logo__img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="bestseller">
                  Best Seller
                </Link>
              </li>

              <li className="nav-item">
                <Link to="newarrival" className="nav-link cursor-pointer">
                  New Arrival
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"aboutus"} className="nav-link cursor-pointer">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"contactus"} className="nav-link cursor-pointer">
                  Contact US
                </Link>
              </li>
            </ul>
            <div className="navIcon__container ">
              <img src={searchIcon} alt="search icon" />
              <img onClick={openCartHandler} src={cartIcon} alt="cart icon" />
              <img src={userIcon} alt="profile icon" />
              <span>{cartProductsCount}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
