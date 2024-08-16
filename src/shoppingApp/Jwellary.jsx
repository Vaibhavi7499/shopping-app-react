import React, { useEffect, useState } from "react";

const Jwellary = () => {
  let [jwellaryData, setJwellaryData] = useState({});

  function jwellary() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        res.json()
    }).then((r)=>{
        setJwellaryData(...jwellaryData,{r})
    })
      .catch((err) => {
        console.warn(err);
      });
  }
console.log(jwellaryData)
  useEffect(() => {
    jwellary();
  }, []);

  return (
    <div>
      <h1>Jwellary</h1>
    </div>
  );
};

export default Jwellary;
