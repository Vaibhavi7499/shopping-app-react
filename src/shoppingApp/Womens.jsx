import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Womens = () => {
  let [women, setWomen] = useState([]);

  function getWomenData() {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setWomen(r);
      });
  }

  useEffect(() => {
    getWomenData();
  }, []);

  return (
    <div className="row m-4">
      {women?.map((e) => (
        <div
          className="card col-md-3"
          style={{
            width: 300,
            marginBottom: "40px",
            padding: "20px",
            marginLeft: "3px",
          }}
        >
          <img src={e?.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link className="cart-title">{e?.title}</Link>
            <h5 className="card-te4t">${e?.price}</h5>
            <Link className="btn btn-primary">Add to Cart</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Womens;
