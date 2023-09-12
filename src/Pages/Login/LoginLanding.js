import React from 'react';
import './LoginLanding.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';


const LoginLanding = () => {

  let navigate = useNavigate();

  return (
    <div className='LoginLandingBody'>
      <div className='backToLanding' onClick={() => navigate('/')}><ArrowBackIcon/></div>
      <center>
        <div className='LoginLandingContainer'>
          <h3>Sign up / Log in</h3>
          <div style={{marginTop:'50px'}} onClick={() => navigate('/customerLogin')}>
            <section>
              <h1>For Everyone</h1>
              <p>Book salons and spas near you</p>
            </section>
            <section>
              <ArrowForwardIcon/>
            </section>
          </div>
          <div style={{background:'black',color:'white'}} onClick={() => navigate('/businessLogin')}>
            <section>
              <h1>For Businesses</h1>
              <p>Manage and grow your business</p>
            </section>
            <section>
              <ArrowForwardIcon/>
            </section>
          </div>
        </div>
        <Logo/>
      </center>
    </div>
  );
}

export default LoginLanding
