import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import "./style.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  

  return (
    <>
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          <div className="logo">
            <img src="/interno.png" alt="" />
          </div>
          <div className={`links ${showMenu ? "hidden" : "teldesign"} gap-10 items-center `}>
            <NavLink to="/" className={`links`} onClick={() => setShowMenu(!showMenu)}>
              Home
            </NavLink>
            {routes.map((route,index) => (
              <NavLink
                key={index}
                to={route.path}
                className={`links`}
                onClick={() => setShowMenu(!showMenu)}
              >
                {route.name}
              </NavLink>
            ))}
          </div>
          <div className={`menu block ${showMenu === "flex" && ""}`} onClick={() => setShowMenu(!showMenu)}
          >
            <FiAlignJustify />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
