import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CalculateScreen = () => {
  return (
    <div className='w-full h-screen d-flex bg-gray-800'>
      <Container className='h-100 d-flex align-items-center justify-content-center'>
        <Row>
          <Col xs={12} className='text-center'>
            <form className='border rounded-lg p-4'>
              <h1 className="text-4xl text-black font-bold mb-4">Calculate</h1>
              <Link to='/BMICalculator' className='d-block mb-3'>
                <Button className='w-100 mb-3' variant="dark">Body Mass Index (BMI)</Button>
              </Link>
              <Link to='/MCalculator' className='d-block mb-3'>
                <Button className='w-100 mb-3' variant="dark">Maintenance Calories</Button>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalculateScreen;
