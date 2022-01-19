import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addManers, getUsers, signUpUser } from '../redux/userAction'

const AddManager = () => {
   const [firstName, setFirstName] = useState('')
   const [email, setEmail] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
const [password, setPassword] = useState('')
const [userRole, setUserRole] = useState('Manager')
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      signUpUser({
        firstName,
        email,
        address,
        phone,
        password,
        userRole,
    
      })
    )
      setFirstName("")
      setAddress("")
      setPhone("")
      setPassword("")
      setEmail('')
      dispatch(getUsers())
  };
    return (  
        <div>
             <Button onClick={handleShow}>Ajouter </Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title> Ajouter le produit</Modal.Title>
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
        firstName
      </Form.Label>
      <Col sm="10">
        <input
          type="text"
          value={firstName}
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Col>
    </Form.Group>
      <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextPassword"
    >
      <Form.Label column sm="2">
        email
      </Form.Label>
      <Col sm="10">
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Col>
    </Form.Group>
    <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextPassword"
    >
      <Form.Label column sm="2">
        phone
      </Form.Label>
      <Col sm="10">
        <input
          type="text"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </Col>
    </Form.Group>
    <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextPassword"
    >
      <Form.Label column sm="2">
        addresse
      </Form.Label>
      <Col sm="10">
    
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
      </Col>
    </Form.Group>
    <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextPassword"
    >
      <Form.Label column sm="2">
        user role
      </Form.Label>
      <Col sm="10">
        <input
          type="text"
          value={userRole}
          placeholder="userRole"
        />
      </Col>
    </Form.Group>

    <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextPassword"
    >
      <Form.Label column sm="2">
        password
      </Form.Label>
      <Col sm="10">
        <input
          type="password"
          value={password}
          placeholder="price"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Col>
    </Form.Group>
   

   
  </Form>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleSubmit}>
      Save
    </Button>
  </Modal.Footer>
</Modal>
        </div>
    )
}

export default AddManager
