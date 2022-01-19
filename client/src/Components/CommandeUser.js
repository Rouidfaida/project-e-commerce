import React, { useEffect, useState } from "react";
import { Button, Table, thead } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addProductsCart,
  handelAddProductCart,
  handelDelete,
} from "../redux/cartAction";
import Navbare from "./Navbare";
import "./Commande.css";
import { TiDelete } from "react-icons/ti";

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
          style={{ width: "1500px", marginTop: "50px", marginLeft: "10px" }}
        >
          <thead>
            <tr style={{ background: "aqua" }}>
              <td>
                <p>ARTICLE</p>
              </td>
              <td>
                <p>Titre</p>
              </td>
              <td>
                <p>QUANTITÉ</p>
              </td>
              <td>
                <p>PRIX UNITAIRE</p>
              </td>
              <td>
                <p>SOUS-TOTAL</p>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody style={{ background: "White" }}>
            {cartItems.map((el) => (
              <tr>
                {" "}
                <td style={{ display: "flex", textAlign: "left" }}>
                  <img
                    style={{ width: "120px", height: "120px" }}
                    className=""
                    src={el.imageUrl}
                    alt=""
                  />
                </td>
                <td>
                  <p>{el.title}</p>
                </td>
                <td>
                  {" "}
                  <p>{Number(el.qty)}</p>
                </td>
                <td>
                  {" "}
                  <p>{Number(el.price)}</p>
                </td>
                <td>
                  <p>{Number(el.price) * Number(el.qty)}</p>
                </td>
                <td>
                  <TiDelete
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(handelDelete(el.id));
                    }}
                    style={{ color: "red", fontSize: "40px" }}
                  />
                </td>
              </tr>
            ))}
            <tr>
              {cartItems
                .map((el) => Number(el.price) * Number(el.qty))
                .forEach((sousTotal) => (total += sousTotal))}
              <td colSpan={4}>
                <h4>TOTAL:</h4>
              </td>

              <td>
                <h4>{`${total} DT`}</h4>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      )}
      <Button
        style={{ marginLeft: "400px" }}
        onClick={(e) => {
          e.preventDefault();
          dispatch(addProductsCart({ commande }));
        }}
      >
        valider votre commande
      </Button>
      <Link to="/">
        <Button>back</Button>
      </Link>
    </div>
  );
};

export default CommandeUser;
