import { useState, FormEvent } from "react";
import { useProductListContext } from "../context/ProductList";
import "./Navbar.scss";
import Logo from "../assets/logo.jpg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

export default function Navbar() {
  const { searchValue, setSearchValue } = useProductListContext();
  const [query, setQuery] = useState(searchValue);

  const sendFormData = (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    setSearchValue(query);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="XXXLutz" />
        </div>
        <div className="search-container">
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendFormData(e)}>
            <input
              type="search"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            {query !== "" && (
              <button
                className="btn clear"
                type="button"
                onClick={() => setQuery("")}
                data-testid="clear-btn"
              >
                X
              </button>
            )}
            <button className="btn primary" type="submit" data-testid="submit-btn">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
