import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
    function handleclick(event){
        navigate("/menu-list");
    }
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <div className="hero-image" style={{backgroundImage: `url(${"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"})`}}>
              <div className="hero-text">
                <h1>Welcome to Kings Punjabi Restaurant</h1>
                <p>Discover the rich and spicy flavors of Punjab</p>
                <Button onClick={(event) => handleclick(event)} variant="primary">View Our Menu</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2>Our Speciality</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="cuisine-image">
              <Image className='images' src={"https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"} fluid />
              <h3>Tasty</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis cupiditate nesciunt repellendus laborum, ratione hic ex corrupti reprehenderit incidunt sapiente maiores, reiciendis quas. Laboriosam, exercitationem! Fugit nam voluptate nobis?</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="cuisine-image">
              <Image className='images' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8QaBMh2H8vbtxR7l2-qfmZGTwUnb4kdPNQ&usqp=CAU"} fluid />
              <h3>Healthy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quaerat beatae atque cupiditate nihil alias quam, in odit tempore sunt aspernatur, quod accusamus eius assumenda? Nemo delectus doloribus voluptas in.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="cuisine-image">
              <Image className='images' src={"https://wallpapercave.com/wp/wp3495563.jpg"} fluid />
              <h3>Delicious</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio amet exercitationem mollitia laborum atque voluptates quae, quidem animi dolorum expedita nemo quasi! In reprehenderit, reiciendis unde tempore id molestias libero.</p>
            </div>
            </Col>
        </Row>
            </Container>
    </div>
  );
  }
export default Home;