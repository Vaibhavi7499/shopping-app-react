import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  let params = useParams();

  let [viewProduct, setViewProduct] = useState({});

  function getProductById() {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setViewProduct(r);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="row d-flex justify-content-around">
      <div
        className="card col-md-6 m-3"
        style={{
          marginBottom: "10px",
        }}
      >
        <div className="text-center h-100">
          <img
            src={viewProduct?.image}
            className="pt-2 card-img-top"
            alt="..."
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <div className="card-body">
          <a className="cart-title">{viewProduct?.title}</a>
          <p className="card-title pt-2">{viewProduct?.description}</p>
          <h5 className="card-title">${viewProduct?.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
