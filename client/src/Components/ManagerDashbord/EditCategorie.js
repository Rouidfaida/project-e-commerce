import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCategorie, getCategorielist } from "../../redux/categorieAction";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

const EditCategorie = ({ el }) => {
  const [name, setName] = useState(el.name);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleSubmit = () => {
  //   dispatch(editCategorie(el_id, name));
  // };
  return (
    <div>
      <Button onClick={handleShow}>update</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Modifier le produit</Modal.Title>
        </Modal.Header>
        <Form style={{ marginLeft: "10px", marginTop: "10px" }}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              name
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Col>
          </Form.Group>
        </Form>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            dispatch(editCategorie(el._id, name));
            dispatch(getCategorielist());
            handleClose();
          }}
        >
          save
        </Button>
      </Modal>
    </div>
  );
};

export default EditCategorie;
