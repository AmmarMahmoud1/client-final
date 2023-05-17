import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex flex-row h-10 my-1">
      <input
        className="rounded-full pl-5 w-60 relative"
        type="text"
        placeholder="Search...."
      />
      <hr className="bg-slate-400 h-1 absolute h-[2.5rem] w-px ml-48" />
      <FaSearch className="absolute h-10 ms-20 ml-52 hover:bg-slate-300 w-5 cursor-pointer" />
    </div>
  );
};

export default Search;
