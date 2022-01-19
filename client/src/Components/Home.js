import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCategorielist } from "../redux/categorieAction";
import { getProductlist } from "../redux/productAction";
import { getUsers } from "../redux/userAction";
import Login from "./Login";
import ManagerList from "./ManagerList";
import Navbare from "./Navbare";
import ProductList from "./ProductList";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
import { filterProduct } from "../redux/productAction";
import { Col, Row } from "react-bootstrap";
import { Select } from "@mui/material";
import Footer from "./Footer";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  const { products, loading } = useSelector((state) => state.allproduct);
  console.log(products);
  const { users } = useSelector((state) => state.alluser);

  // useEffect(() => {
  //     dispatch(getProductlist(),getCategorielist())

  //   }, [])
  const [search, setSearch] = useState("");
  var d = new Date();
  var days = d.getDay();
  const categories = useSelector((state) => state.allcategorie);
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value);
    dispatch(filterProduct(e.target.value));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorielist()
    ,getUsers());
  }, [dispatch]);
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbare search={search} setSearch={setSearch} />
      <Row>

  
     <Col style={{marginLeft:"150px"}} xs={12} md={12}>
        <ProductList
          product={products.filter((el) =>
            el.title.toLowerCase().includes(search.toLowerCase())
          )}
        />
        {days == 1 ? <Navigate to="/blackFriday" /> : <></>}
      </Col>
      </Row>
      <Footer/>
          </div>
  );
};

export default Home;
