import React, { Component } from "react";
import './Recommended.css';
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommended = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3
  };

  return (
    <div className='RecommendedBody'>
        <h1>Recommended</h1>
        <center>
        <Slider {...settings}>
          <div>
            <Card/>
          </div>
          {/* <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div> */}
        </Slider>
        </center>
    </div>
  )
}

export default Recommended
