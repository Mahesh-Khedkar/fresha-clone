import React from 'react';
import './LoginLanding.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useNavigate } from 'react-router-dom';


const LoginLanding = () => {
  const navigate = useNavigate();

  return (
    <div className='LoginLandingBody'>
      <div style={{cursor:'pointer'}} onClick={() => navigate('/')}><ArrowBackIcon/></div>
      <center>
        <div className='LoginLandingContainer'>
          <h3>Sign up / Log in</h3>
          <div style={{marginTop:'50px'}}>
            <section>
              <h1>For Everyone</h1>
              <p>Book salons and spas near you</p>
            </section>
            <section>
              <ArrowForwardIcon/>
            </section>
          </div>
          <div style={{background:'black',color:'white'}}>
            <section>
              <h1>For Businesses</h1>
              <p>Manage and grow your business</p>
            </section>
            <section>
              <ArrowForwardIcon/>
            </section>
          </div>
        </div>
        <center>
          <div>
            <div style={{height:'28px',width:'28px',borderRadius:'14px', background: 'linear-gradient(white, blue)'}}></div>
            <div>
              <h2>
                ESalon
              </h2>
            </div>
          </div>
        </center>
      </center>
    </div>
  );
}

export default LoginLanding
