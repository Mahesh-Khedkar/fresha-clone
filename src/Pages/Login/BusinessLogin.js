import React from 'react';
import './BusinessLogin.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

const BusinessLogin = () => {

    let navigate = useNavigate();

  return (
    <div className='BusinessLoginBody'>
        <div className='backToLoginLanding' onClick={() => navigate('/login')}><ArrowBackIcon/></div>
        <center>
            <h2>Esalon for Business</h2>
            <p>Create an account or log in to manage your Fresha business.</p>
            <br/>
            <div className='formBody'>
                <form>
                    <input type='text' placeholder='Enter your email address'></input>
                    <br/>
                    <input type='submit' value={"Continue"}></input>
                    OR
                    <hr></hr>
                    {/* <input type='submit' style={{background:'white', color:'black'}} value={`${<FacebookIcon/>} + "Continue with Facebook`}></input> */}
                    <input type='submit' style={{background:'white', color:'black'}} value="Continue with Facebook"></input>
                    <p>Have a business account? <br/> 
                    Manage your business with ESalon by</p>
                    <section className='custSignUp' onClick={() => navigate('/customerLogin')}>
                        Sign in as a customer
                    </section>
                </form>
            </div>
            <Logo/>
        </center>
    </div>
  )
}

export default BusinessLogin
