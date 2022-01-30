import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getCategorielist } from "../../redux/categorieAction";
import { getProductlist } from "../../redux/productAction";
import ProductListAdmin from "./ProductListAdmin";
import { getUsers } from "../../redux/userAction";
import CategorieList from "./CategorieList";

const Manager = () => {
  const { users } = useSelector((state) => state.alluser);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allproduct);
  const { categories } = useSelector((state) => state.allcategorie);

  useEffect(() => {
    dispatch(getProductlist(), getCategorielist());
  }, []);
  return (
    <div>
      <ProductListAdmin />
    </div>
  );
};

export default Manager;
