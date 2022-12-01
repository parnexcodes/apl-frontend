import React, { useState } from "react";
import Link from "next/link";
import { MenuData } from "../Components/menuData";
// import "../cssFiles/navbarStyles.css"

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <div className=" flex justify-evenly">
      <Link href={"/"} className="logo ml-4">
        <img className="h-12 logo_icon" src="apl-logo.png" />        
        </Link>
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu "}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.url} className={item.cName}>
                <i className="${item.icons}"></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
