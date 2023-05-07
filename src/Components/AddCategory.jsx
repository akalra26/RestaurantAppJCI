import axios from 'axios';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// import { useLocation } from 'react-router-dom';

function AddCategory() {
    const [validated, setValidated] = useState(false);
    const menuId = useLocation();
    const navigate = useNavigate();
    const categoryNameRef = useRef(null);
    const categoryDescriptionRef = useRef(null);
    const categoryImageLinkRef = useRef(null);
    const displayOrderRef = useRef(null);
    // console.log(menuid.state.menuid);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // const categoryID = 0;
            const categoryname = categoryNameRef.current.value;
            const categorydescription = categoryDescriptionRef.current.value;
            const categoryimageLink = categoryImageLinkRef.current.value;
            const categoryisDeleted = false;
            const displayOrder = displayOrderRef.current.value;

            const categoryData = {
                categoryId: 0,
                categoryName: categoryname,
                categoryDescription: categorydescription,
                categoryImage: categoryimageLink,
                isDeleted: categoryisDeleted
            };

            console.log(categoryData);

            axios.post(`https://localhost:7237/api/CategoryTables/${menuId.state.menuid}, ${displayOrder}`, categoryData)
                .then(response => {
                    console.log(response);
                    alert("Category Added Succesfully");
                    console.log(menuId.state.menuId);
                    navigate("/category-list", {state: {menuId: menuId.state.menuid}});
                })
                .catch(error => {
                    console.log("error submiting data in put", error);
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
                        <Form.Label>Category name</Form.Label>
                        <Form.Control
                            ref={categoryNameRef}
                            required
                            type="text"
                            placeholder="Category name"
                        // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="15" controlId="validationCustom02">
                        <Form.Label>Category Description</Form.Label>
                        <Form.Control
                            ref={categoryDescriptionRef}
                            required
                            type="text"
                            placeholder="Category Description"
                        // defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="15" controlId="validationCustom02">
                        <Form.Label>Display Order</Form.Label>
                        <Form.Control
                            ref={displayOrderRef}
                            required
                            type="text"
                            placeholder="Display Order"
                        // defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="15" controlId="validationCustomUsername">
                        <Form.Label>Category Image Link</Form.Label>
                        {/* <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                        <Form.Control
                            ref={categoryImageLinkRef}
                            type="text"
                            placeholder="category Image Link"
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

export default AddCategory;