import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg  px-3" id="navBar">
        <div className="collapse navbar-collapse" id="myNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a href="#navbar" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#inventory" className="nav-link">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a href="#featured" className="nav-link">
                Featured
              </a>
            </li>
          </ul>
          {/*buttons for login and register*/}
          <div>
            <button type="button" className="btn btn-outline-info register">
              Login
            </button>
            <button type="button" className="btn btn-info register ">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
