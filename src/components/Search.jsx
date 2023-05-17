import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="input-wrapper">
      <FaSearch className="flex" />
      <input type="text" placeholder="Type a search...." />
    </div>
  );
};

export default Search;
