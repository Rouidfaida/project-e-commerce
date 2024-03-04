import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductlist } from "../redux/productAction";
// import ProductCard from './ProductCard'
import Navbare from "./NavBareDashbord/Navbare";
import Home from "./Home";

const Livre = () => {
  const { products, loading } = useSelector((state) => state.allproduct);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbare />
      {products.filter((el) => el.category == "livre")}
      <Home/>
    </div>
  );
};

export default Livre;
