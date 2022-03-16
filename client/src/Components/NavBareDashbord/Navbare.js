import React, { useEffect, useState } from "react";
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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Fade from "@mui/material/Fade";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { useDispatch, useSelector } from "react-redux";
import { getCategorielist } from "../../redux/categorieAction";
import { filterProduct } from "../../redux/productAction";
import { getUsers, logout } from "../../redux/userAction";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiSpellBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BsBasket3Fill } from "react-icons/bs";

import { Link } from "react-router-dom";
import {
  AiFillQuestionCircle,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { MdContactMail, MdOutlineRemoveShoppingCart } from "react-icons/md";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { emphasize } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import Filter from "../ManagerDashbord/Filter";
import { BadgeUnstyled, Button, InputLabel } from "@mui/material";
import { videCart } from "../../redux/cartAction";
import { BiErrorCircle } from "react-icons/bi";

const Navbare = ({ search, setSearch }) => {
  const logOut = () => {
    // dispatch(videCart())
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.alluser);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const categories = useSelector((state) => state.allcategorie);
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "200px" }}>
        <div style={{ display: "flex" }}>
          <AiOutlinePhone
            style={{
              color: "white",
              marginLeft: "650px",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
          <h2 style={{ color: "white", marginTop: "10px" }}>+216 24 565 230</h2>

          <AiFillQuestionCircle
            style={{
              color: "white",
              marginLeft: "25px",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
          <Link style={{ color: "white", marginTop: "10px" }} to="/faq">
            FAQ
          </Link>
          <BiErrorCircle
            style={{
              color: "white",
              marginLeft: "25px",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
          <Link style={{ color: "white", marginTop: "10px" }} to="/about">
            Qui sommes-Nous ?
          </Link>
        </div>
        <hr style={{ color: "white" }} />

        <div
          style={{ display: "flex", marginLeft: "100px", marginTop: "30px" }}
        >
          <GiSpellBook
            style={{ width: "50px", height: "50px", color: "orange" }}
          />
          <div style={{ display: "block" }}>
            <h2
              style={{
                fontStyle: "italic",
                color: "white",
                fontSize: "15px",
              }}
            >
              libraire en ligne{" "}
            </h2>
            <h6 style={{ color: "orange" }}>Facilite ton vie </h6>
          </div>

          <form
            style={{
              display: "flex",
              height: "40px",
              width: "450px",
              marginLeft: "100px",
              marginTop: "10px",
            }}
          >
            <input
              placeholder="Rechercher"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "480px",
                backgroundColor: "white",
                border: "none",
                borderRadius: "10px 0 0 10px",
              }}
            />
            <button
              style={{
                backgroundColor: "orange",
                width: "150px",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "0 10px 10px 0px",
              }}
            >
              Rechercher
            </button>
          </form>
          <BsBasket3Fill
            style={{
              color: "orange",
              fontSize: "40px",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          />
          <Link to="/commande">
            {/* <IconButton aria-label="cart"> */}
            <StyledBadge
              badgeContent={
                cartItems.length > 0 && (
                  <span className="notification" style={{ color: "white" }}>
                    {cartItems.length}
                  </span>
                )
              }
              color="secondary"
              backgroundColor="orange"
            >
              {/* <ShoppingCartIcon
                      style={{ color: "white", fontSize: "30px" }}
                    /> */}
            </StyledBadge>
            {/* </IconButton> */}
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div
              style={{
                display: "flex",
                marginLeft: "50px",
                marginTop: "15px",
                color: "orange",
              }}
            >
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <CgProfile
                      style={{ fontSize: "20px", color: "orange" }}
                      {...bindTrigger(popupState)}
                    />
                    Mon compte
                    {/* <Button style={{color:"white"}}  {...bindTrigger(popupState)}> */}
                    {/* </Button> */}
                    <Menu {...bindMenu(popupState)}>
                      <Link to="/profile">
                        <MenuItem
                          style={{ color: "blue" }}
                          onClick={popupState.close}
                        >
                          Profile
                        </MenuItem>
                      </Link>
                      <Link to="/login">
                        <MenuItem onClick={popupState.close}>
                          connecter
                        </MenuItem>
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => {
                          logOut();
                          dispatch(videCart());
                        }}
                      >
                        <MenuItem onClick={popupState.close}>
                          deconnecter
                        </MenuItem>
                      </Link>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </Box>
        </div>
      </div>
      <div
        style={{ backgroundColor: "orange", display: "flex", height: "70px" }}
      >
        <div
          style={{ display: "flex", marginLeft: "700px", marginTop: "20px" }}
        >
          <div
            style={{ display: "flex", marginLeft: "10px", marginRight: "20px" }}
          >
            <Link
              style={{
                color: "white",
                display: "flex",
                marginLeft: "10px",
              }}
              to="/"
            >
              <AiOutlineHome style={{ fontSize: "20px", marginLeft: "10px" }} />
              <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}>Accueil</h6>
            </Link>
          </div>
        </div>
        <Link
          style={{ color: "white", display: "flex", marginTop: "20px" }}
          to="/contact"
        >
          {/* <MdContactMail style={{ fontSize: "20px", marginLeft: "10px" }} /> */}
          <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}> Contact</h6>
        </Link>
        {/* <Filter/> */}
      </div>
    </div>
  );
};

export default Navbare;
