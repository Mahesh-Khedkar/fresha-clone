import React, { useState } from 'react';
import './Recommended.css';
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopData from '../../Data/Data';

const Recommended = () => {

  let [initialShow, setInitialShow] = useState(0);
  let [finalShow, setFinalShow] = useState(4);

  function handleClick()
  {
    if(ShopData.length == finalShow)
    {
      setFinalShow = finalShow;
    }
    else{
      setFinalShow = finalShow + 4;
    }

  }


  return (
    <div className='RecommendedBody'>
        <h1>Recommended</h1>
        <center>
          <div>
            <Card finalShow={finalShow}/>
          </div>
        <button className="morebtn" onClick={handleClick()}>More</button>
        </center>
    </div>
  )
}

export default Recommended
