import React from 'react';
import './Card.css';
import Data from '../Data';

const Card = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        {
            Data && Data.slice(0,4).map((item) =>{
            return(
                <div className='card'>
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
