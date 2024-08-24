import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  let { removeFromCart, cartCount } = useContext(cartContext);

  return (
    <div className="row d-flex justify-content-around">
      {!cartCount.length ? (
        <EmptyCart />
      ) : (
        cartCount?.map((e) => (
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
              <Link
                className="btn btn-danger"
                onClick={() => removeFromCart(e?.id)}
              >
                Remove From Cart
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
