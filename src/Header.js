import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header_optionLineOne">Hello Guest </span>
          <span className="header_optionLineTwo">Sign In </span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Returns </span>
          <span className="header_optionLineTwo">& Orders </span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime </span>
        </div>

        <Link to="/Checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
