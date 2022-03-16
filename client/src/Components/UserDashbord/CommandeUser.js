import React, { useEffect, useState } from "react";
import { Button, Table, thead } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "emailjs-com";
import Navbare from "../NavBareDashbord/Navbare";
import "./Commande.css";
import { TiDelete } from "react-icons/ti";
import { addProductsCart, handelDelete } from "../../redux/cartAction";
import { MdDelete } from "react-icons/md";

const CommandeUser = (id) => {
  const { products } = useSelector((state) => state.allproduct);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  let commande = cartItems;

  let total = 0;

 
  return (
    <div>
      <Navbare />
      {cartItems.length === 0 ? (
        <h5>votre panier est vide</h5>
      ) : (
        <Table
          style={{ marginTop: "50px", marginLeft: "200px" ,width:"800px",border:"2px solid",borderColor:"Lime"}}
        >
         
          <tbody style={{ background: "White" }}>
            {cartItems.map((el) => (
              <tr style ={{border:"2px solid",borderColor:"Lime"}}>
                {" "}
                <td style={{ display: "flex" }}>
                  <img
                    style={{ width: "120px", height: "120px" }}
                    className=""
                    src={el.imageUrl}
                    alt=""
                  />
                </td>
                <td style={{width:"250px"}}>
                  <p style={{fontSize:"15px",fontStyle:"italic",color:"grey"}}>{el.title}</p>
                </td>
                <td>
                  {" "}
             
             
                  <p style={{fontSize:"15px",fontStyle:"italic",color:"grey"}}>{Number(el.qty)}</p>
                </td>
                <td>
                  {" "}
                  <p style={{fontSize:"15px",fontStyle:"italic",color:"grey"}}>{Number(el.price)}</p>
                </td>
                <td>
                  <p style={{fontSize:"15px",fontStyle:"italic",color:"grey"}}>{Number(el.price) * Number(el.qty)}</p>
                </td>
                <td>
                  <MdDelete
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(handelDelete(el.id));
                    }}
                    style={{ color: "orange", fontSize: "30px" }}
                  />
                </td>
              </tr>
            ))}
            <tr>
              {cartItems
                .map((el) => Number(el.price) * Number(el.qty))
                .forEach((sousTotal) => (total += sousTotal))}
              <td colSpan={4}style ={{border:"2px solid",borderColor:"Lime"}}>
                <h4 style={{color:"blue"}}>TOTAL:</h4>
              </td>

              <td>
                <h4 style={{color:"blue"}}>{`${total} DT`}</h4>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      )}
      <Button
        style={{ marginLeft: "800px",backgroundColor:"orange", border:"none" }}
        onClick={(e) => {
          e.preventDefault();
          dispatch(addProductsCart({ commande }));
        }}
      >
        valider votre commande
      </Button>
     
    </div>
  );
};

export default CommandeUser;
