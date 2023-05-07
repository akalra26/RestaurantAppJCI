import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
function Home() {
    return(
        <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8QaBMh2H8vbtxR7l2-qfmZGTwUnb4kdPNQ&usqp=CAU"} fluid />
              <div className="hero-text">
                <h1>Welcome to Kings Punjabi Restaurant</h1>
                <p>Discover the rich and spicy flavors of Punjab</p>
                <Button variant="primary">View Our Menu</Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <h2>Our Cuisine</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8QaBMh2H8vbtxR7l2-qfmZGTwUnb4kdPNQ&usqp=CAU"} fluid />
              <h3>Butter Chicken</h3>
              <p>Chicken cooked in a rich and creamy tomato-based sauce with spices.</p>
            </Col>
            <Col md={4}>
            <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8QaBMh2H8vbtxR7l2-qfmZGTwUnb4kdPNQ&usqp=CAU"} fluid />
            <h3>Tandoori Chicken</h3>
            <p>Chicken marinated in yogurt and spices, then grilled to perfection in a clay oven.</p>
          </Col>
          <Col md={4}>
            <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8QaBMh2H8vbtxR7l2-qfmZGTwUnb4kdPNQ&usqp=CAU"} fluid />
            <h3>Samosas</h3>
            <p>Triangular shaped pastry filled with spiced vegetables or meat.</p>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default Home;