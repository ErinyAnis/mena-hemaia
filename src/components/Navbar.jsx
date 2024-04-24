import React, { useState } from "react";
import * as FaIcons from "react-icons/hi2";
import * as IoIcons from "react-icons/io";
import headerLogo from "../assets/header-logo.webp";
import navTopLogo from "../assets/nav-top-logo.webp";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  function handleshowSidebar() {
    setSideBar(!sidebar);
  }

  return (
    <>
      <header>
        <div className="navbar d-block">
          <div className="navbar-holder">
            <Link to="#" className="menu-bars">
              <FaIcons.HiBars3 onClick={handleshowSidebar} />
            </Link>
            <img src={headerLogo} alt="mena Hemaia" />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <Link to="#" className="close-nav">
            <IoIcons.IoIosClose onClick={handleshowSidebar} />
          </Link>
          <div className="top-logo-holder">
            <img src={navTopLogo} alt="mena Hemaia" />
          </div>
          <ul className="nav-menu-items">
            <li>
              <Link
                to="#about"
                className="nav-text"
                onClick={handleshowSidebar}
              >
                About Mena Hemaia
              </Link>
            </li>
            <li>
              <Link
                to="#landing-sec"
                className="nav-text"
                onClick={handleshowSidebar}
              >
                Watch Video
              </Link>
            </li>
            <li>
              <Link
                to="#amazon-book"
                className="nav-text"
                onClick={handleshowSidebar}
              >
               Intelligent Strategies Book
              </Link>
            </li>
            <li>
              <Link
                to="#accounts"
                className="nav-text"
                onClick={handleshowSidebar}
              >
               Accountack
              </Link>
            </li>
            <li>
              <Link
                to="#accounts"
                className="nav-text"
                onClick={handleshowSidebar}
              >
               MenaTCP
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
