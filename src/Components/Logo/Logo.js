import React from 'react';
import './Logo.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

    let navigate = useNavigate();

  return (
    <div>
      <center>
                <div className='logoContainer' onClick={() => navigate('/')}>
                    <div className='round'></div>
                    <div>
                        <h2 style={{marginLeft:'5px'}}>
                            ESalon
                        </h2>
                    </div>
                </div>
        </center>
    </div>
  )
}

export default Logo
