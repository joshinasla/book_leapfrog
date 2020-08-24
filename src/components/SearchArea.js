import React from "react";
import { FaSearch } from "react-icons/fa";

import "../pages/SearchBook.css";

function SearchArea(props) {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook}>
        <div className="searchBox">
          <input
            className="searchbox"
            type="text"
            onChange={props.handleSearch}
            placeholder="Search..."
          />

          <button className="addBtn" type="submit">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchArea;
