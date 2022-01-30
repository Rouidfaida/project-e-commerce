import React, { useState } from "react";
import {
  AddCategorielist,
  getCategorielist,
} from "../../redux/categorieAction";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddCategorie = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddCategorielist({ name }));
  };
  return (
    <div>
      <BiMessageSquareAdd
        style={{
          fontSize: "40px",
          color: "green",
          margin: "100px 60px 80px 70px",
        }}
        onClick={handleShow}
      ></BiMessageSquareAdd>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Ajouter categorie</Modal.Title>
        </Modal.Header>
        <Form
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              categorie
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={name}
                placeholder="categorie name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Button onClick={handleSubmit}>add</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddCategorie;
