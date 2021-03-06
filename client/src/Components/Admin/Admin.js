import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/userAction";
import NavBarManager from "../ManagerDashbord/NavBarManager";
import ManagerList from "./ManagerList";
import NavBarAdmin from "./NavBarAdmin";

const Admin = () => {
  const { users, loading } = useSelector((state) => state.alluser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <NavBarAdmin />
      {/* <ManagerList user={users}/> */}
    </div>
  );
};

export default Admin;
