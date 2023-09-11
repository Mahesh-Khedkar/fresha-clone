import React, { Component } from "react";
import './Recommended.css';
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewToESalon = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='RecommendedBody'>
        <h1>New to ESalon</h1>
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

export default NewToESalon
