import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, logout } from "../../redux/userAction";
import "../ManagerDashbord/nav.css";
const NavBarAdmin = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              style={{ color: "white", fontSize: "17px" }}
              to="/getmanager"
              onClick={() => dispatch(getUsers())}
            >
              manager
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "white", fontSize: "17px" }}
              to="/login"
              onClick={() => {
                logout();
              }}
            >
              deconnecter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAdmin;
