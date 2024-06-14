import axios from "axios";
import React, { useState } from "react";
import {Navigate, redirect } from "react-router-dom"
import { Form, Button, Alert, Card } from "react-bootstrap";
import Localhost from "../variable";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  

  // const [] = useState();

  async function login(){
    try {
      const data = await axios.post(`${Localhost}/user/login`, {
        email ,
        password,
      });

      console.log(data);

      if(data.data.token){
                
        setValidated(true);
      }else{
        setShowAlert(true);
      }

      return data;    
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();

    login()
   
  };

  if(validated){
    return <Navigate to="/" />;
  }
  
  return (
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Logo
          </Card.Title>
          {showAlert && (
            <Alert variant="danger">Please fill out the form correctly.</Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                
                Sign In!
                
              </Button>
            </div>
            <p>
              Don't have an account?<a href="RegisterForm">Sign Up</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
  );
};

export default LoginForm;
