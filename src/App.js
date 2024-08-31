import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import BsicDetails from "./form/BsicDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AdditionalQuestion from "./form/AdditionalQuestion";
// import EnteredDetails from "./form/EnteredDetails";
// import Response from "./form/Response";
// import Cart from "./shoppingApp/Cart";
// import All from "./shoppingApp/All";
// import Electronics from "./shoppingApp/Electronics";
// import Jwellary from "./shoppingApp/Jwellary";
// import Men from "./shoppingApp/Men's";
// import Womens from "./shoppingApp/Womens";
// import ViewProduct from "./shoppingApp/ViewProduct";
// import FilterTab from "./shoppingApp/FilterTab";
import { cartContext } from "./context/CartContext";
import axios from "axios";
import HandleForm from "./FormHandle/HandleForm";

let AdditionalQuestion = React.lazy(() => import("./form/AdditionalQuestion"));
let EnteredDetails = React.lazy(() => import("./form/EnteredDetails"));
let Response = React.lazy(() => import("./form/Response"));
let Cart = React.lazy(() => import("./shoppingApp/Cart"));
let All = React.lazy(() => import("./shoppingApp/All"));
let Electronics = React.lazy(() => import("./shoppingApp/Electronics"));
let Jwellary = React.lazy(() => import("./shoppingApp/Jwellary"));
let Men = React.lazy(() => import("./shoppingApp/Men's"));
let Womens = React.lazy(() => import("./shoppingApp/Womens"));
let ViewProduct = React.lazy(() => import("./shoppingApp/ViewProduct"));
let FilterTab = React.lazy(() => import("./shoppingApp/FilterTab"));

function App() {
  let [cartCount, setCartCount] = useState([]);

  // useEffect(() => {
  //   getCart();
  // }, []);

  function addToCart(obj) {
    axios({
      method: "POST",
      url: "http://localhost:8000/cart",
      data: obj,
    })
      .then((r) => {
        console.log(r, "add to cart");
        getCart();
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  function getCart() {
    axios
      .get("http://localhost:8000/cart")
      .then((r) => {
        setCartCount(r.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  function removeFromCart(id) {
    axios({
      method: "DELETE",
      url: `http://localhost:8000/cart/${id}`,
    })
      .then((r) => {
        getCart();
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <div className="App">
      {/* <cartContext.Provider value={{ addToCart, cartCount, removeFromCart }}>
        <BrowserRouter>
          <FilterTab />
          <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
               <Route path='/' element={<BsicDetails/>}/> 
              <Route
                path="/additionalquestion"
                element={<AdditionalQuestion />}
              />
              <Route path="/entereddetails" element={<EnteredDetails />} />
              <Route path="/response" element={<Response />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<All />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/jwellary" element={<Jwellary />} />
              <Route path="/mens" element={<Men />} />
              <Route path="/womens" element={<Womens />} />
              <Route path="/view/:id" element={<ViewProduct />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </cartContext.Provider> */}
      <HandleForm/>
    </div>
  );
}

export default App;
