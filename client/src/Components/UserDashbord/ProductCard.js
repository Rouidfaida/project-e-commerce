import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Form,Button, Col, Row } from "react-bootstrap";
import { deleteProduct, editProduct, getProductId, getProductlist } from '../../redux/productAction';
import EditProduct from '../ManagerDashbord/EditProduct';
import { getUsers } from '../../redux/userAction';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart, handelAdd } from '../../redux/cartAction';

const ProductCard = ({el}) => {
   
  const dispatch = useDispatch()

    return (
        <div >
          <Card  style={{marginLeft:"30px",marginBottom:"20px",width:"208px",height:"313px"}}>
      {/* <CardMedia
        component="img"
        height="140"
        image={el.imageUrl}
        alt="green iguana"
      /> */}
      {/* <img style={{marginTop:"10px",            
}} src={el.imageUrl}/> */}
            <Link to=''>      <img src={`http://localhost:4000${el.imageUrl}`}/>
</Link>


      <CardContent>
      <Link   to={`infos/${el._id}`}>

        <Typography gutterBottom variant="h5" component="div" style={{fontSize:"12px" }}>
           {el.title}
        </Typography>
        </Link>

        <Typography variant="body2" color="text.secondary">
        Prix: {el.price} dt
        </Typography>
        
      </CardContent>
      <CardActions>

     
      </CardActions>
    </Card>
   
        </div>
    )
}

export default ProductCard
