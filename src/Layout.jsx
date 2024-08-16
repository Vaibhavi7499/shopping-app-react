import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  BasicDetails
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  ShoppingApp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                ShoppingApp
              </Link>
            </li>
            <li className="d-flex">
              <Link className="nav-link active" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-3">
        <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/all">
                All
              </Link>
            </li>
            <li className="d-flex">
              <Link className="nav-link active" to="/electronics">
              Electronics
              </Link>
            </li>
            <li className="d-flex">
              <Link className="nav-link active" to="/jwellary">
              Jwellary
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
