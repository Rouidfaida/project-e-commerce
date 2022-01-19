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
import { getCategorielist } from "../redux/categorieAction";
import { filterProduct } from "../redux/productAction";
import { getUsers, logout } from "../redux/userAction";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiSpellBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import Swal from "sweetalert2/dist/sweetalert2.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { emphasize } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import Filter from "./Filter";
import { Button, InputLabel } from "@mui/material";
import { videCart } from "../redux/cartAction";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
   
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
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
  const categories = useSelector((state) => state.allcategorie);
  return (
    <div style={{ backgroundColor: "red" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"> 
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <div style={{ display: "flex" }}>
                <GiSpellBook
                  style={{ width: "50px", height: "50px", color: "orange" }}
                />
                <div style={{ display: "block" }}>
                  <h2
                    style={{
                      fontStyle: "italic",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    libraire en ligne{" "}
                  </h2>
                  <h6 style={{ color: "orange" }}>Facilite ton vie </h6>
                </div>
              </div>
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link style={{ color: "white" }} to="/">
                <StyledBreadcrumb
                  component="a"
                  href="#"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                />
              </Link>
              <Link style={{ color: "white" }} to="/about">
                <StyledBreadcrumb component="a" label="About" />
              </Link>
              <Link style={{ color: "white" }} to="/contact">
                <StyledBreadcrumb component="a" label="Contact" />
              </Link>
            </Breadcrumbs>

            <Search style={{ marginLeft: "100px", width: "300px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Rechercher"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "280px" }}
              />
            </Search>
            <Filter/>
            <div style={{ display: "flex" ,marginLeft:"150px" }}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <CgProfile
                        style={{ fontSize: "20px" }}
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
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/commande">
                <Badge
                  style={{ color: "red" }}
                  badgeContent={
                    cartItems.length > 0 && (
                      <span className="notification">{cartItems.length}</span>
                    )
                  }
                >
                  <AiOutlineShoppingCart
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </Badge>
              </Link>
              <MdOutlineRemoveShoppingCart
                style={{ marginLeft: "10px", fontSize: "30px" }}
                onClick={() => dispatch(videCart())}
              />
            
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};

export default Navbare;
