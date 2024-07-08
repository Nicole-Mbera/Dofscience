import React from "react";
import "./home.css"
import Homelayout from "../components/homelayout";
import mission from "../assets/images/mission.png"
import vision from "../assets/images/vision.png"
import values from "../assets/images/values.png"
import MyCarousel from "./swiper";
import Swiper from "./carousel";

const Home = () => {
  return (
    <Homelayout>
    <div className='home-container'>
      <div className="anime" id="home">
        <MyCarousel></MyCarousel>
      </div>
    <div className="we-are" id="about-us">

  <h1 className="title">WHO WE ARE</h1>
  <p>Dofscience is a global excellence partner, scientists and advanced engineers to promote factories at another level. we offer personal coaching, technical know-how, transfer and applied science.
Make a unique character as a professional.</p>
<p>we are philanthropic, government registered foundation, endeavoring to turn dreams into reality.</p>

    </div>
    <div className="area" id="services">
<div className="vertical"/>
<div className="we-are">
<h1 className="title">AREA OF</h1>
<h1 className="title">INTERVENTION</h1>
<p>Food and agricultural processing</p>
<p>Cosmetics</p>
<p>Plastic and paper processing </p>
<p>Paints</p>
<p>Fertilizers</p>
<p>pharmaceuticals</p>
<p>Technology</p>
<p>Ai research</p>


<p>etc</p>
</div>
    </div>
    <div className="vmc">
<div className="vision">
<div className="icon"><img src={mission} alt="mission potrayed"></img></div>
<h1>Mission</h1>
<p>Donate complete next generation password solutions to make a unique character as a professional.</p>
</div>
<div className="vision">
<div className="icon"><img src={vision} alt="Description of vision"></img></div>
<h1>Vision</h1>
<p>Turning dreams into reality through state-of-the-art advanced technology, transfer, and applied science.</p>
</div>
<div className="vision">

<div className="icon"><img src={values} alt="core values"></img></div>
<h1>Values</h1>
<p>Teamwork, integrity, excellence, innovation, and honesty.</p>
</div>
    </div>
    <div className="carousel-container" id="more-functionality">
      <h1 className="titre">MORE FUNCTIONALITY</h1>
      <Swiper></Swiper></div>

    <div className="area">
<div className="vertical-1"/>
<div className="we-are">
<h1 className="title">DOFSCIENCE CONFIDENTIAL</h1>
<h1 className="title">INFORMATION</h1>
<p>Beyond the theory, beyond the classrooms, there is dofscience to improve the quality of having experience, knowledge and good judgement.</p>
<p>Join 3000 research experts to get a complete next-generation password solution to make a unique character as professional.</p>

</div>
    </div>
    </div>
    </Homelayout>
  );
}

export default Home;
