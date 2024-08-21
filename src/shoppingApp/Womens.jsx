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
    <div className="row d-flex justify-content-around">
    {women?.map((e) => (
      <div
        key={e?.id}
        className="card col-md-4 m-3"
        style={{
          width: "18rem",
          marginBottom: "10px",
        }}
      >
        <div className="text-center h-100">
          <img
            src={e?.image}
            className="pt-2 card-img-top"
            alt="..."
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <div className="card-body">
          <Link className="cart-title" to={`/view/${e?.id}`}>
            {e?.title}
          </Link>
          <h5 className="card-title">${e?.price}</h5>
          <Link className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Womens;