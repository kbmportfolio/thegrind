import React from "react";
import "./Header.css";
// import SearchIcon from '@mui/icons-material/Abc';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider"
import Grid from '@mui/material/Grid'; // Grid version 1
import Coffeeicon from "./coffeeicon.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    
    
    <div className="header">
     
     
      <Link to="/">
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        /> */}
        
        <h1 className="brand">The Grind</h1>
        
       
      </Link>

      {/* <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

      <div className="header__nav">
        
          {/* <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}
      <h1 className="carttext">Cart:</h1>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
    
  );
}

export default Header;