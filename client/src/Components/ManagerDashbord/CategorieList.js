import { Card, CardActions } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorielist } from "../../redux/categorieAction";
import AddCategorie from "./AddCategorie";
import CategorieCart from "./CategorieCart";
import NavBarManager from "./NavBarManager";

const CategorieList = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.allcategorie);

  useEffect(() => {
    dispatch(getCategorielist());
  }, []);
  return (
    <div>
      <NavBarManager />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "20px 50px 100px 100px",
        }}
      >
        {categories.map((el, i) => (
          <CategorieCart el={el} key={i} />
        ))}
        <Card
          style={{
            height: "315px",
            width: "200px",
            marginLeft: "40px",
            backgroundColor: "beige",
          }}
        >
          <CardActions>
            <AddCategorie />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CategorieList;
