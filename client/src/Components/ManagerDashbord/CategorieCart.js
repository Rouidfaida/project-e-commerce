import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCategorie, getCategorielist } from "../../redux/categorieAction";
import EditCategorie from "./EditCategorie";

const CategorieCart = ({ el }) => {
  const dispatch = useDispatch();
  return (
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
            style={{ fontSize: "12px" }}
          >
            {el.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              dispatch(deleteCategorie(el._id), getCategorielist())
            }
          >
            Delete
          </Button>
          <EditCategorie el={el} />
        </CardActions>
      </Card>
    </div>
  );
};

export default CategorieCart;
