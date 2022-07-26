import React from "react";
import { useProductListContext } from "../context/ProductList";
import "./Navbar.scss";
import Logo from "../assets/logo.jpg";
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg"

export default function Navbar() {
  const { searchValue, setSearchValue } = useProductListContext();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="XXXLutz" />
        </div>
        <div className="search-container">
          <input
            type="search"
            name="search"
            value={searchValue}
            placeholder="Search..."
            onChange={(ev) => setSearchValue(ev.target.value)}
          />
          <button className="btn"><SearchIcon /></button>
        </div>
      </div>
    </nav>
  );
}
