import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductCartAdmin from "./ProductCartAdmin";
import { getProductlist } from "../../redux/productAction";
import AddCategorie from "./AddCategorie";
import { Card, CardActions } from "@mui/material";
import "./ProductListAdmin.css";
import NavBarManager from "./NavBarManager";
const ProductListAdmin = () => {
  const { loading, categorySelected } = useSelector(
    (state) => state.allproduct
  );
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allproduct);

  useEffect(() => {
    dispatch(getProductlist());
  }, []);
  return (
    <div>
      <NavBarManager />
      <div className="query1">
        <div
          className="query2"
          style={{
            display: "flex",
            marginLeft: "250px",
            justifyContent: "center",
          }}
        >
          {" "}
          {/* <AddProduct /> */}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "200px",
            marginTop: "50px",
            marginRight: "150px",
          }}
        >
          {products
?.filter((product) => {
              if (categorySelected !== "all")
                return product.category === categorySelected;
              else return true;
            })
            .map((el, i) => (
              <ProductCartAdmin el={el} key={i} />
            ))}
          <Card style={{ height: "315px", width: "200px", marginLeft: "40px" }}>
            <CardActions>
              <AddProduct />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductListAdmin;
