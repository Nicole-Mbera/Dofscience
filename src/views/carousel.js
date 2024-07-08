import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../assets/images/bank.jpg";
import image2 from "../assets/images/global.jpg";
import image3 from "../assets/images/career.jpg";
import image4 from "../assets/images/presence.jpg";
import image5 from "../assets/images/lock.jpg"
import './carousel.css';  // Import the custom CSS file

const Swiper = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-content">
          <img
            className="d-block "
            src={image1}
            alt="First slide"
          />
          
          <div className='caption'>
            <h3>DOFSCIENCE BRAIN BANK</h3>
            <p>Dofscience ability innovate,empower and transform abelievers customers through our state of artistic advanced technology.</p>
            </div>
        
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
          <img
            className="d-block "
            src={image5}
            alt="Second slide"
          />
          
          <div className='caption'>
            <h3>UNLOCKING POTENTIAL</h3>
            <p>Dofscience is unlocking a person's potential to maximize their own performance. It is helping them to learn rather than teaching them.</p>
            </div>
        
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
          <img
            className="d-block "
            src={image2}
            alt="Second slide"
          />
          
          <div className='caption'>
            <h3>PASSWORD SOLUTIONS</h3>
            <p>Dofscience gave me a complete password solution to globalize my business</p>
            </div>
        
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
          <img
            className="d-block "
            src={image3}
            alt="Third slide"
          />
        <div className='caption'>
            <h3>CAREER DEVELOPMENT</h3>
            <p>We assist your career development by providing access to Job opportunities.</p>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-content">
          <img
            className="d-block "
            src={image4}
            alt="Fourth slide"
          />
        
        <div className='caption'>
            <h3>DOFSCIENCE GLOBAL PRESENCE</h3>
            <p>
            We're operating and having a significant influence in multiple countries around the world.</p>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Swiper;
