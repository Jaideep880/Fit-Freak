import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { register } from "../actions/userAction";
import FormContainer from "../components/shared/FromContainer";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const validatePassword = (password) => {
    const capitalLetter = /[A-Z]/;
    const digit = /\d/;
    const specialCharacter = /[!@#$&*(),.?":|]/;
    
    if (!capitalLetter.test(password)) {
      return "Password must start with a Capital letter";
    }
    if (!digit.test(password)) {
      return "Password must contain at least One digit";
    }
    if (!specialCharacter.test(password)) {
      return "Password must contain at least one Special character";
    }
    return "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      const validationMessage = validatePassword(password);
      if (validationMessage) {
        setPasswordValidationMessage(validationMessage);
      } else {
        setPasswordValidationMessage("");
        dispatch(register(name, email, password));
      }
    }
  };

  return (
    <>
      <FormContainer>
        <h1>Register</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}
        {passwordValidationMessage && (
          <Message variant="danger">{passwordValidationMessage}</Message>
        )}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account?{" "}
            <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
