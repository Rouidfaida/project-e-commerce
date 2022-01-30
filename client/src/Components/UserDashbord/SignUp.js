import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, loginUser, signUpUser } from "../../redux/userAction";
import { Alert, Button, Form } from "react-bootstrap";
import { isEmail } from "validator";
import "./signUp.css";
import Navbare from "../NavBareDashbord/Navbare";

const SignUp = () => {
  const { loading } = useSelector((state) => state);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [userRole, setUserRole] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    email.trim() === "" ||
    firstName.trim() === "" ||
    address.trim() === "" ||
    phone.trim() === "" ||
    password.trim() === ""
      ? alert("this is required")
      : e.preventDefault();
    dispatch(
      signUpUser({ firstName, email, phone, address, password }),
      getUsers()
    );
    alert("success signup");
  };

  return (
    <div className="bod">
      <div
        style={{
          width: "300px",
          padding: "30px 30px",
          margin: "40px auto  0 auto",
          height: "1000px",
        }}
      >
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom et prènom</Form.Label>
            <Form.Control
              type="text"
              placeholder="FullName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="your phone please"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            style={{
              background: "linear-gradient(to right , #ff416c,#ff4b2b)",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
