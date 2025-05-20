import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import supp from "../assets/supp.jpg"

const Supplements = () => {
  return (
    <>
    <h1>SUPPLEMENTS GUIDE FOR MEN AND WOMEN</h1>
    <Container fluid >
        
        <br/>
        <Row>
        <Card className=" w-100 d-flex justify-content-center align-items-center" >
            <Card.Img variant="top" src={supp} />    
          </Card>
        </Row>
        </Container>
        </>
  )
}

export default Supplements