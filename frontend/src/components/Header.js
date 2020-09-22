import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <div className="container-fluid">
          <div className="row height-max align-items-center">
            <div className="col col-md-9-9 ml-auto text-right pr-5">
              <h5 className="title-heading d-inline-block p-2 text-uppercase">
                the all new
              </h5>
              <h2 className="text-uppercase my-2 title">2018 Mercedese benz</h2>
              <h3 className="text-uppercase">Model name</h3>
              <h6 className="text-capitalize">stars from</h6>
              <h2>
                $60000{" "}
                <a href="" className="title-icon d-inline-block mx-2">
                  <i className="fas fa-play"></i>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
