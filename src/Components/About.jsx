import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <div className="About">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={"https://www.urdesignmag.com/wp-content/uploads/2019/05/the-5-key-elements-of-a-beautiful-restaurant-interior-design-1-1200x520.jpg"} fluid />
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>Kings Punjabi Restaurant has been serving authentic Punjabi cuisine since 2005. Our chefs use traditional recipes and fresh ingredients to bring you the best flavors of Punjab. We take pride in our friendly and welcoming atmosphere and strive to make every dining experience a memorable one.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
