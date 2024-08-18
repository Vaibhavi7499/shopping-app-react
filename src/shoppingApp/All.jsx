import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Cart from "./Cart";

const All = () => {

  let [product, setProduct] = useState([]);

  let [cart,setCart] = useState([]);

  function all() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setProduct(r);
      });
  }

  useEffect(() => {
    all();
  }, []);

  
  return (
    <div className="row m-4">
      {product?.map((e) => (
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
            <Link className="cart-title" to={`/view/${e?.id}`}>{e?.title}</Link>
            <h5 className="card-title">${e?.price}</h5>
            <Link className="btn btn-primary" >
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default All;
