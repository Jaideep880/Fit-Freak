import React from "react";
import { Breadcrumb, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../assets/img1.png";
import wave from "../assets/wave2.png";


const PlanScreen = () => {
  let data = [
    {
        name: "BLUEPRINT TO SIZE",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-blueprint-to-size.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Transform",
        gender: "Female, Male",
        duration:"4 weeks",
       
      },
      {
        name: "3 WEEKS 2 SIZE",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-3weeks2size.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Build Muscle",
        gender: "Female, Male",
        duration:"3 weeks",
        
      },
      {
        name: "SHORTCUT TO SHRED",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-shortcuttoshred.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Transform",
        gender: "Female, Male",
        duration:"3 weeks",
       
      },
      {
        name: "ULTIMATE 30-DAY FITNESS",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ultimate-30day-fitness.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Build Muscle",
        gender: "Female, Male",
        duration:"3 weeks",
      
      },
      {
        name: "IRON EVERY DAY",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Build Muscle",
        gender: "Male",
        duration:"4 weeks",
       
      },
      {
        name: "STRONGER THAN YESTERDAY",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-stronger-than-yesterday-2.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Lose Fat ",
        gender: "Male",
        duration:"5 weeks",
      
      },
      {
        name: "POWER BODYBUILDING",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-power-bodybuilding.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Build Muscle",
        gender: "Female, Male",
        duration:"3 weeks",
     
      },
      {
        name: "START HERE YOUR NEW YEAR",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-start-here-your-new-year.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Lose Fat",
        gender: "Female",
        duration:"1 weeks",
        
      },
      {
        name: "LEAN BODY",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-leanbody.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Lose Fat",
        gender: "Female",
        duration:"4 weeks",
       
      },
      {
        name: "IRON EVERY DAY",
        image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
        desc:"Lorem ipsum porttitor posuere. Praesent id metus massa, ut blrandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim ex ea commodo consequat.",
        type:"Build Muscle",
        gender: "Male",
        duration:"4 weeks",
       
      },
  ];
  
  return (
    <div className="plans-container">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banner})`, backgroundRepeat:"no-repeat"
        }}
      >
        <img src={wave} alt="wave" className="wave" />
        <Container>
          <h1 className="banner-heading">Plans</h1>
          <Breadcrumb>
            
            <Breadcrumb.Item active>Plans</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
          {data.map((item, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Type: {item.type} | Gender: {item.gender} | Duration:{" "}
                    {item.duration}
                  </small>
                </Card.Footer>
                <div className="d-grid">
                  <Link to={`/plan`}>
                    <Button variant="primary">VIEW DETAILS</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlanScreen;
