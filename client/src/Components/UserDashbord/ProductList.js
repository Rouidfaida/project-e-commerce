import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductlist } from "../../redux/productAction";
import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  const { loading, categorySelected } = useSelector(
    (state) => state.allproduct
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductlist());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "200px",
        marginTop: "50px",
        marginRight: "150px",
      }}
    >
      {product
        .filter((product) => {
          if (categorySelected !== "all")
            return product.category === categorySelected;
          else return true;
        })
        .map((el, i) => (
          <ProductCard el={el} key={i} />
        ))}

    
    </div>
  );
};

export default ProductList;
