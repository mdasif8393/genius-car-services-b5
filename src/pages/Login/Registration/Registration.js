import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Registration = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);

    if (user) {
      navigate("/");
    }
  };
  return (
    <div>
      <h2 className="text-center text-primary">Please Register</h2>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>

          <p>
            Already Registered?
            <Link to="/login" className="text-decoration-none text-danger">
              Please Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
