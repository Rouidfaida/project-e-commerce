import { Card, CardActions } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/userAction";
import AddManager from "./AddManager";
import ManagerCart from "./ManagerCart";
import NavBarAdmin from "./NavBarAdmin";

const ManagerList = () => {
  const { users } = useSelector((state) => state.alluser);

  return (
    <div>
      <NavBarAdmin />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px 20px",
          marginLeft: "200px",
        }}
      >
        {users.map((el, i) => (
          <ManagerCart el={el} key={i} />
        ))}
        <Card style={{ height: "315px", width: "200px", marginLeft: "40px" }}>
          <CardActions>
            <AddManager />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ManagerList;
