import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link, Navigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartAction';
import Navbare from '../NavBareDashbord/Navbare';
import './Info.css'
// import { useHistory } from "react-router";

const Info = () => {
  
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
    const [quantity, setQuantity] = useState('')

    const {cartItems} = useSelector((state) => state.cart);
console.log(cartItems)
let params = useParams();

    const {users} = useSelector(state => state.alluser)
// const {productcart} = useSelector(state => state.allcommande)
let pr =products.find(el=>el._id==params.id)
// useEffect(() => {
//   if (pr && params.id !== pr._id) {
//     dispatch(getProductId(params.id));
//   }
// }, [dispatch,params, pr]); 

// console.log(pr)
//  const addToCartHandler = () => {
//   dispatch(addToCart([pr._id, quantity]));
// };

    return (
        <div>
<Navbare/>
            <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img
          style={{width:"350px",height:"350px"}}
          src={pr.imageUrl}
          alt="a wallpaper"
          className="card-img-top"
        />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3> {pr.title} </h3>
          <hr />
          <p id="product_price">{pr.price}TND</p>
          <div>
            <p>
              Quantity
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(pr.quantityStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {" "}
                    {x + 1}{" "}
                  </option>
                ))}
              </select>
            </p>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={()=>dispatch(addToCart(pr._id,quantity))}
          >
            Add to Cart
          </button>
<Link to='/commande'>
           <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4">cart</button>
          </Link>
          <hr />

          <p>
            Status:
            <span id="stock_status">
              {pr.quantityStock > 0 ? "In Stock"  : "Out of Stock"}
            </span>
          </p>

          <h2>prix :{pr.price*quantity}</h2> 
          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>
          {pr.description}
          </p>
          <Link to="/">
            <button
              id="review_btn"
              type="button"
              className="btn btn-primary mt-4"
              data-toggle="modal"
              data-target="#ratingModal"
            >
              Go back
            </button>
          </Link>

          <div className="row mt-2 mb-5">
            <div className="rating w-50">
              <div
                className="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ratingModalLabel">
                        Submit Review
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <textarea
                        name="review"
                        id="review"
                        className="form-control mt-3"
                      ></textarea>

                      <button
                        className="btn my-3 float-right review-btn px-4 text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
           </div>
    )
}

export default Info
