import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="ContactUs">
      <Container>
        <Row className="mt-5 mb-5">
          <Col>
            <h2>Contact Us</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>Get in Touch</h3>
            <p>Feel free to contact us with any questions or feedback. We'd love to hear from you!</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Visit Us</h3>
            <p>We are located at:</p>
            <address>
              123 Main Street<br />
              Toronto, ON M1M 1M1<br />
              Canada
            </address>
            <p>Call us at: <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a></p>
            <p>Email us at: <a href="mailto:info@kingspunjabirestaurant.com">info@kingspunjabirestaurant.com</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
