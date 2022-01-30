import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../redux/userAction";

const ManagerCart = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {el.userRole === "Manager" ? (
        <div>
          <div className="row" key={el._id}>
            {/* <p> {el.name} </p> */}
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
                  style={{ fontSize: "18px" }}
                >
                  <span style={{ color: "blue" }}> Nom :</span> {el.firstName}
                </Typography>

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  <span style={{ color: "blue" }}> Mobile :</span> {el.phone}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  <span style={{ color: "blue" }}> Email : </span>
                  {el.email}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontSize: "18px" }}
                >
                  <span style={{ color: "blue" }}> Role :</span> {el.userRole}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => dispatch(deleteUser(el._id))}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ManagerCart;
