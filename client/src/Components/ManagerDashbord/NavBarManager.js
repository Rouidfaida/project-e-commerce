import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Breadcrumb } from "@mui/material";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { emphasize } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import "./nav.css";
import { getCategorielist } from "../../redux/categorieAction";
import { getUsers, logout } from "../../redux/userAction";
import { getProductlist } from "../../redux/productAction";
import { useDispatch } from "react-redux";

const NavBarManager = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              style={{ color: "white", fontSize: "18px" }}
              to="/prod"
              onClick={() => dispatch(getProductlist())}
            >
              product
            </Link>
          </li>
          <li>
            {" "}
            <Link
              style={{ color: "white", fontSize: "18px" }}
              to="/getuse"
              onClick={() => dispatch(getUsers())}
            >
              user
            </Link>
          </li>
          <li>
            {" "}
            <Link
              style={{ color: "white", fontSize: "18px" }}
              to="/categ"
              onClick={() => dispatch(getCategorielist())}
            >
              categorie
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

export default NavBarManager;
