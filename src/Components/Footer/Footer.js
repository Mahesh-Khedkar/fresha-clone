import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
// import GoogleIcon from '@material-ui/icons/Google';
import AppleIcon from '@material-ui/icons/Apple';

const Footer = () => {
  return (
    <div className='footerBody'>
        <footer>
            <div className='fdiv1'>
                <ul>
                    <li><Logo/></li>
                <section className='getApp'>
                    {/* <li>get the app</li> */}
                    <b>Get the app</b>
                    <span style={{marginLeft:'10px'}}>
                        <AppleIcon/>
                    </span>
                    {/* <GoogleIcon/> */}
                </section>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>About ESalon</b></li>
                    <li>Careers</li>
                    <li>Customer Support</li>
                    <li>Blog</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>For business</b></li>
                    <li>For partners</li>
                    <li>Pricing</li>
                    <li>Support</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Legal</b></li>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                    <li>Terms of use</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>Find us on social</b></li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                </ul>
            </div>
            

        </footer>
        <div className='fdiv2'>
                <p>
                    <small>GB</small>
                    <strong>English</strong>
                </p>
                <p>
                    ©️2023 ESalon.com
                </p>

            </div>
    </div>
  )
}

export default Footer
