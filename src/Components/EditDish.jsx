import axios from 'axios';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function EditDish() {
  const [validated, setValidated] = useState(false);
  const dishid = useLocation();
  const categoryid = useLocation();
  const navigate = useNavigate();
  const dishNameRef = useRef(null);
  const dishDescriptionRef = useRef(null);
  const dishImageLinkRef = useRef(null);
  const dishNatureRef = useRef(null);
  const dishPriceRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // const dishID = 0;
      const dishname = dishNameRef.current.value;
      const dishdescription = dishDescriptionRef.current.value;
      const dishimageLink = dishImageLinkRef.current.value;
      const dishprice = dishPriceRef.current.value;
      const dishnature = dishNatureRef.current.value;
      const dishisDeleted = false;
    
      const dishData = {
        dishId: dishid.state.dishId,
        dishName: dishname,
        dishDescription: dishdescription,
        dishPrice: dishprice,
        dishImage: dishimageLink,
        nature: dishnature,
        isDeleted: dishisDeleted
      };

      // console.log(dishData);

      axios.put(`https://localhost:7237/api/DishTables/${dishid.state.dishId}`, dishData)
        .then(response => {
          console.log(response);
          alert("Updated Succesfully");
          navigate("/dish-list", {state:{categoryId: categoryid.state.categoryId}});
        })
        .catch(error => {
          console.log("error submiting data in put", error);
          alert("Failed to Update");
        });
    }

    setValidated(true);
  };

  return (
    <Container>
      {/* <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="form-container position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"> */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Form.Group as={Col} md="15" controlId="validationCustom01">
            <Form.Label>Dish name</Form.Label>
            <Form.Control
              ref={dishNameRef}
              required
              type="text"
              placeholder="Dish name"
            // defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="15" controlId="validationCustom02">
            <Form.Label>Dish Description</Form.Label>
            <Form.Control
              ref={dishDescriptionRef}
              required
              type="text"
              placeholder="Dish Description"
            // defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">

          <Form.Group as={Col} md="15" controlId="validationCustom02">
            <Form.Label>Dish Price</Form.Label>
            <Form.Control
              ref={dishPriceRef}
              required
              type="text"
              placeholder="Dish Price"
            // defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">

          <Form.Group as={Col} md="15" controlId="validationCustom02">
            <Form.Label>Nature</Form.Label>
            <Form.Control
              ref={dishNatureRef}
              required
              type="text"
              placeholder="Nature"
            // defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="15" controlId="validationCustomUsername">
            <Form.Label>Dish Image Link</Form.Label>
            {/* <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              ref={dishImageLinkRef}
              type="text"
              placeholder="Dish Image Link"
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
      {/* </div>
    </div> */}
    </Container>
  );
}


export default EditDish;