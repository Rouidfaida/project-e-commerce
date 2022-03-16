import { List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategorielist } from "../../redux/categorieAction";
import { filterProduct } from "../../redux/productAction";

const Filter = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories = useSelector((state) => state.allcategorie);
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value);
    dispatch(filterProduct(e.target.value));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorielist());
  }, [dispatch]);
  
  return (
    <div style={{width:"200px",marginLeft:"50px",marginTop:"20px"}}>
      <Form.Select  style={{border:"none"}} label="categorie" value={category} onChange={handleCategory}>
        <option style={{border:"none"}} value="all">All Products</option>
        {categories.categories.map((category) => (
          <option value={category.name} key={category._id}>
            {category.name}
          </option>
        ))}
      </Form.Select>
      </div>
    
  );
};

export default Filter;
