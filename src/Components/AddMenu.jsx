import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddMenu() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    // <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="form-container position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-4">
        <Form.Group as={Col} md="20" controlId="validationCustom01">
          <Form.Label>Menu name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Menu name"
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        
      <Row className="mb-3">

        <Form.Group as={Col} md="20" controlId="validationCustom02">
          <Form.Label>Menu Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Menu Description"
            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="20" controlId="validationCustomUsername">
          <Form.Label>Menu Image Link</Form.Label>
          {/* <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="text"
              placeholder="Menu Image Link"
            //   aria-describedby="inputGroupPrepend"
            //   required
            />
            <Form.Control.Feedback type="invalid">
             Good Link!
            </Form.Control.Feedback>
          {/* </InputGroup> */}
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    // </div>
  );
}


export default AddMenu;