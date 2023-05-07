import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Route, useNavigate} from 'react-router-dom';
// import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    if (username === 'akalra26' && password === 'kalra1289') {
      console.log('Login successful!');
      navigation("/home");
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4">
        <h1 className="mb-4">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="d-block mx-auto" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
