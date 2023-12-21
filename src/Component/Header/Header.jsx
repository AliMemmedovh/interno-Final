import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./style.css";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          <div className="logo">
            <img src="/interno.png" alt="" />
          </div>
          <div className="links hidden gap-10 items-center  ">
            <NavLink to="/" className="links">
              Home
            </NavLink>
            <NavLink to="/Pages" className="links">
              Pages
            </NavLink>
            <NavLink to="/Services" className="links">
              Services
            </NavLink>
            <NavLink to="/Project" className="links">
              Project
            </NavLink>
            <NavLink to="/Blog" className="links">
              Blog
            </NavLink>
            <NavLink to="/Contact" className="links">
              Contact
            </NavLink>
            <NavLink to="/Search" className="links">
              <CiSearch />
            </NavLink>
          </div>
          <div className=" menu block">
            <FiAlignJustify />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
