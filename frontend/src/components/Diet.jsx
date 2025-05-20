import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import bulking from "../assets/bulking.jpg";
import cutting from "../assets/cutting.jpg";
const Diet = () => {
  return (
   <>
   <Container>
   <h1>BULKING DIET PLAN</h1>
   <Row>
        <Col >
          <Card>
            <Card.Img variant="top" src={bulking} />
          </Card>
        </Col>
        </Row>
        
    <h1>CUTTING DIET PLAN</h1>
    <Row>
        <Col >
          <Card>
            <Card.Img variant="top" src={cutting} />    
          </Card>
        </Col>
        </Row>
   </Container>
   </>
  )
}

export default Diet