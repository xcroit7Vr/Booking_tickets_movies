import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
          // Optionally, if your API requires an API key:
          // 'X-API-Key': 'your-api-key-value'
        },
      });
      console.log('Registration successful:', response.data);
      // Add logic for redirecting or other actions after successful registration
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className='register-style'>
      <Form onSubmit={handleSubmit} className='form-style'>
        <h1 className="d-flex justify-content-center">
          <strong className="mt-1">REGISTER FORM</strong>
        </h1>
        <Form.Group className="mb-3" controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Your Username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Valid Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="small-button">
          Sign Up!
        </Button>
        <p>
          <a href="LoginForm">Already have an account? Sign In!</a>
        </p>
      </Form>
    </div>
  );
}

export default RegisterForm;
