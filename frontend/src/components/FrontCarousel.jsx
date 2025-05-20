import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/front1.jpg';
import Image2 from '../assets/front1.jpg';
import Image3 from '../assets/front1.jpg';
import { Container } from 'react-bootstrap';

const FrontCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container>
      <Slider {...settings} style={{ width: '80%', margin: 'auto', height: '400px' }}>
        <div>
          <img src={Image1} alt="Slide 1" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" style={{ width: '100%', height: '100%' }} />
        </div>
      </Slider>
    </Container>
  );
};

export default FrontCarousel;
