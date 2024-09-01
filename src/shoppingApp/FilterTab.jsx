import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const FilterTab = () => {
let {cartCount} = useContext(cartContext);

  let mySelf = {
    display: "block",
    padding: "10px 15px",
    textDecoration: "none",
  };

  let obj = {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#61897a",
  };

  let heading = {
    position: "relative",
    textAlign: "center",
    color: "white",
    transition: "0.5s",
  };

  let cart = {
    position: "relative",
    left: "35%",
    marginTop: "10px",
  };

  return (
    <div style={obj}>
      <ul className="nav nav-pills">
        <li className="mt-2" style={heading}>
          <h5>Shopping App</h5>
        </li>
        <li className="" style={mySelf}>
          <NavLink
            className=""
            to="/"
            style={({ isActive }) => ({
              color: "white",
              position: isActive && "relative",
              display: isActive && "block",
              textDecoration: "none",
              backgroundColor: isActive && "#337ab7",
              padding: "5px 7px",
            })}
          >
            All
          </NavLink>
        </li>
        <li style={mySelf}>
          <NavLink
            className=""
            to="/electronics"
            style={({ isActive }) => ({
              color: "white",
              position: isActive && "relative",
              display: isActive && "block",
              textDecoration: "none",
              backgroundColor: isActive && "#337ab7",
              padding: "5px 7px",
            })}
          >
            Electronics
          </NavLink>
        </li>
        <li style={mySelf}>
          <NavLink
            className=""
            to="/jwellary"
            style={({ isActive }) => ({
              color: "white",
              position: isActive && "relative",
              display: isActive && "block",
              textDecoration: "none",
              backgroundColor: isActive && "#337ab7",
              padding: "5px 7px",
            })}
          >
            Jwellary
          </NavLink>
        </li>
        <li style={mySelf}>
          <NavLink
            className=""
            to="/mens"
            style={({ isActive }) => ({
              color: "white",
              position: isActive && "relative",
              display: isActive && "block",
              textDecoration: "none",
              backgroundColor: isActive && "#337ab7",
              padding: "5px 7px",
            })}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li style={mySelf}>
          <NavLink
            className=""
            to="/womens"
            style={({ isActive }) => ({
              color: "white",
              position: isActive && "relative",
              display: isActive && "block",
              textDecoration: "none",
              backgroundColor: isActive && "#337ab7",
              padding: "5px 7px",
            })}
          >
            Women's Clothing
          </NavLink>
        </li>
        <div style={cart}>
          <li>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "5px 7px",
              }}
            >
              <h5 className="position-relative">
                cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartCount?.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </h5>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FilterTab;
