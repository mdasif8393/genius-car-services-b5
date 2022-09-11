import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const passwordRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h1 className="text-center text-primary">Please Login</h1>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <Form className="w-50" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>
            New User?
            <Link to="/register" className="text-decoration-none text-danger">
              Please Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </Form>
      </div>
    </div>
  );
};

export default Login;
