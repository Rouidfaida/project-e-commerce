import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../redux/userAction";
import NavBarManager from "../ManagerDashbord/NavBarManager";
import ManagerList from "./ManagerList";
import NavBarAdmin from "./NavBarAdmin";

const HomeManager = () => {
  const { users, loading } = useSelector((state) => state.alluser);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBarAdmin />
      {users.userRole === "Admin" ? (
        <Navigate to="/admin" />
      ) : users.userRole === "Manager" ? (
        <Navigate to="/manager" />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default HomeManager;
