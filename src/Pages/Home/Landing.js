import React from 'react';
import './Landing.css';
import LandingNavbar from '../../Components/Navbar/LandingNavbar';
import Recommended from './Recommended';
import NewToESalon from './NewToESalon';

const Landing = () => {
  return (
    <div className='landingBody'>
      <div className='navDiv'>
        <LandingNavbar/>
      </div>
      <center>
        <div className='welcomeContainer'>
          <div className='welcomemsg'>
            <p><b>Book local beauty and wellness services</b></p>
          </div>
          <div className='LandingSearchBar'>

          </div>
        </div>
      </center>
      <Recommended/>
      <NewToESalon/>
    </div>
  )
}

export default Landing
