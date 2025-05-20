import React from 'react';
import {Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import workout from '../assets/workout.png';



const SinglePlan = () => {
  const { plan } = useParams();
  let data = [
    {
      name: "DAILY WORKOUTS",
    
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"8-Week Training Plan",
      button: "GET STARTED",
      link:"/workout",
    },
    {
      name: "NUTRITION PLAN",
      
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"Properly fuel your Body",
      button: "GET STARTED",
      link:"/diet",
    },
    {
      name: "SUPPLEMENT GUIDE",
      
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"Increase your Results",
      button: "GET STARTED",
      link:"/supplements"
    },
   
  ];

  return (
   
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="text-white">{plan}</h1>
            <h2 className="text-white">WORKOUT SCHEDULE</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
            <Link to={`/plan`}>
              <Image src={workout} className="w-100" />
            </Link>
            <h2 className="text-white">THIS WORKOUT PLAN INCLUDES</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {data?.map((item, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
                <h3 className="text-center text-black">{item.name}</h3>
                <p className="text-center text-black">{item.type}</p>
                <p className="text-center text-black">{item.desc}</p>
                <div className="text-center">
                  <Link to={`${item.link}`}>
                    <Button variant="primary">{item.button}</Button>
                  </Link>
                </div>
             
            </Col>
          ))}
        </Row>
      </Container>
    
  );
};

export default SinglePlan;
