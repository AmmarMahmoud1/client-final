import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";

const ulStyles = {
  dropdown:
    "fixed top-16 right-5 text-black dark:text-white bg-slate-200 dark:bg-slate-800 rounded text-base",
  expanded: "sm:flex justify-end items-center hidden sm:block mr-4",
};

const MenuList = ({ dropdown = false }) => {
  return (
    <ul className={dropdown ? ulStyles.dropdown : ulStyles.expanded}>
      {/* <ul className=" sm:flex justify-end items-center hidden mr-4"> */}

      <li className="mx-4 my-2">
        <Link to="/">Home</Link>
      </li>

      <li className="mx-4 my-2">
        <Link to="/about">About</Link>
      </li>

      <li className="mx-4 my-2">
        <Link to="/contact">Contact</Link>
      </li>

      <li className="mx-4 my-2">
        <Link to="/login">Login</Link>
      </li>

      <li className="mx-4 my-2">
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const showDropdown = (e) => {
    e.stopPropagation();
    setToggleDropdown((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setToggleDropdown(false);
    });
  }, []);

  return (
    <div className="fixed w-screen mt-[-1px] h-12 bg-pink-300 flex justify-between">
      <div
        className="sm:hidden text-3xl flex items-center p-4"
        onClick={showDropdown}
      >
        <RxHamburgerMenu />
        {toggleDropdown && <MenuList dropdown />}
      </div>

      <Header />

      <Search />

      <MenuList />
    </div>
  );
};

export default NavBar;
