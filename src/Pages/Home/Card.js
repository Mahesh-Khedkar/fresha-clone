import React, { useEffect, useState } from 'react';
import './Card.css';
import Data from '../../Data/Data';

const Card = (finalShow) => {

  console.log(finalShow);
  let [show, setShow] = useState(4);
  useEffect(()=>{
    setShow = finalShow.finalShow;
  }
  )

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        {
            Data && Data.slice(0, show).map((item) =>{
            return(
            <div className='card' key={Data.id}>
              <div>
                <img src={item.image}></img>
              </div>
              <div className='cardBody'>
                <h3>{item.title}</h3>
                <p>{item.rating.rate}⭐({item.rating.count})</p>
                {/* <p>{item.description}</p> */}
                card body text hhdhdhdhhdjshhdhddh
                <button>{item.category}</button>
              </div>
            </div>
            )
            })
        }
        
    </div>
  )
}

export default Card
