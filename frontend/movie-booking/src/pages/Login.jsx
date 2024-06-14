import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setShowAlert(true);
      setValidated(true);
    } else {
      setShowAlert(false);
      setValidated(true);
      try {
        const response = await fetch('http://localhost:5000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': '{{X-API-Key}}'
          },
          body: JSON.stringify({
            username: email,
            password: password
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }
        const data = await response.json();
        // Handle successful login response here
        console.log(data);
      } catch (error) {
        setErrorMessage(`There was a problem with the fetch operation: ${error.message}`);
        setShowAlert(true);
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Logo
          </Card.Title>
          {showAlert && (
            <Alert variant="danger">{errorMessage || "Please fill out the form correctly."}</Alert>
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
            <Form.Group className="mb3" controlId="formPassword">
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">Sign In!</Button>
            </div>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
