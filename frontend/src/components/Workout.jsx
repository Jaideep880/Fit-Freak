import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import w1 from "../assets/w1.jpeg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpg";
import w9 from "../assets/w9.jpg";
import w10 from "../assets/w10.jpg";
import w11 from "../assets/w11.jpg";
import w12 from "../assets/w12.jpg";
import w13 from "../assets/w13.jpg";
import w14 from "../assets/w14.jpg";
import w15 from "../assets/w15.jpg";
import w16 from "../assets/w16.jpg";
import w17 from "../assets/w17.jpg";

const Workout = () => {
  return (
    <>
     <Container>
        <h1>CHEST EXERCISES</h1>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w1} />
            <Card.Body>
              <Card.Title><strong>Incline Chest Press</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w2} />
            <Card.Body>
              <Card.Title><strong>Pec Dec Fly</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w3} />
            <Card.Body>
              <Card.Title><strong>Barbell Bench Press</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w4} />
            <Card.Body>
              <Card.Title><strong>Chest Dips</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1>BACK EXERCISES</h1>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w5} />
            <Card.Body>
              <Card.Title><strong>Latt Pull-Down</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w6} />
            <Card.Body>
              <Card.Title><strong>Dumbell Rows</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w7} />
            <Card.Body>
              <Card.Title><strong>Seated Rows</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={w8} />
            <Card.Body>
              <Card.Title><strong>Pull-Ups</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1>LEGS EXERCISES</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w9} />
            <Card.Body>
              <Card.Title><strong>Leg Press</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w10} />
            <Card.Body>
              <Card.Title><strong>Leg Extension</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w11} />
            <Card.Body>
              <Card.Title><strong>Leg Curls</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1>ARMS EXERCISES</h1>
      <h2>BICEPS EXERCISES</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w12} />
            <Card.Body>
              <Card.Title><strong>Spider Curls</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w13} />
            <Card.Body>
              <Card.Title><strong>Biceps Curls</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w14} />
            <Card.Body>
              <Card.Title><strong>Barbell Curls</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <h2>TRICEPS EXERCISES</h2>
        <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w15} />
            <Card.Body>
              <Card.Title><strong>Triceps PushDown</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w16} />
            <Card.Body>
              <Card.Title><strong>Skull Crushers</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={w17} />
            <Card.Body>
              <Card.Title><strong>Overhead Dumbell Extension</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
        </>
  )
}

export default Workout