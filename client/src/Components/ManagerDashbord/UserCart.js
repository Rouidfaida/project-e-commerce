import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
const UserCart = ({ el }) => {
  return (
    <div>
      <Card
        style={{
          marginLeft: "30px",
          marginBottom: "20px",
          width: "208px",
          height: "313px",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: "12px" }}
          >
            {el.firstName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {el.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.address}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default UserCart;
