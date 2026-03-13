import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();

  const item = location.state;

  return (
    <>
      <div>
        <h1>{item?.title}</h1>
        <img src={item?.image} alt="" />
      </div>
    </>
  );
};

export default ProductDetails;
