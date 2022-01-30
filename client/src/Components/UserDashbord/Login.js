import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, loginUser } from "../../redux/userAction";
import { Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import "./signUp.css";
import { getProductlist } from "../../redux/productAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    dispatch(getProductlist());
  };
  const { users, loading } = useSelector((state) => state.alluser);

  return (
    <div className="bod">
      {loading ? (
        <h1>...loading</h1>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/homeAdmin" />
      ) : (
        <div
          style={{
            width: "300px",
            padding: "30px 30px",
            margin: "40px auto  0 auto",
            height: "1000px",
          }}
        >
          <h1>Login </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{
                background: "linear-gradient(to right , #ff416c,#ff4b2b)",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Connecter
            </Button>
            <p className="text">vous n'avez pas un compte ?</p>
            <Link to="/sign">
              <Button
                style={{
                  background: "linear-gradient(to right , #ff416c,#ff4b2b)",
                }}
              >
                {" "}
                Enregistrer
              </Button>
            </Link>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
