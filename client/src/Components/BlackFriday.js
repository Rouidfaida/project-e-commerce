import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const BlackFriday = () => {
    return (
        <div>
           <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Black Friday</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Promotion</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> 
        </div>
    )
}

export default BlackFriday
