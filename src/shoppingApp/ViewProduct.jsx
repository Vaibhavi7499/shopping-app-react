import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  let params = useParams();

  let [viewProduct, setViewProduct] = useState([]);

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

  console.log(viewProduct);

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="row m-4">
      <div
        className="card col-md-3"
        style={{
          width: 300,
          marginBottom: "40px",
          padding: "20px",
          marginLeft: "3px",
        }}
      >
        <img src={viewProduct?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{viewProduct?.title}</h5>
          <p>{viewProduct?.description}</p>
          <h5 className="card-te4t">${viewProduct?.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
