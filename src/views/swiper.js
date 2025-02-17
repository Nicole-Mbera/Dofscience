import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../assets/images/woman.jpg"
import image2 from "../assets/images/beaker.jpg"
import image3 from "../assets/images/network.jpg"
import image4 from "../assets/images/future.png"
import image5 from "../assets/images/system.jpg"


const MyCarousel = () => {
  return (
    <div className="anime">
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3 className='slogan'>THE FUTURE OF</h3> */}
          {/* <h3>INDUSTRY IS HERE</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
    </div>
  );
}

export default MyCarousel;
