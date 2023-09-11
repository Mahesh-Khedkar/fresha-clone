import React from 'react';
import './LandingNavbar.css';
import { Link, useNavigate } from 'react-router-dom';

const LandingNavbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'login') {
      navigate('/login');
    } else if (selectedValue === 'download') {
      // Handle other navigation options as needed
    }
  };

  return (
    <div>
      <nav className="homepageNav">
        <div className="left">
          <h1>ESalon</h1>
        </div>
        <div className="right">
          <div className=""><b>For Business</b></div>
          <div>
            <select onChange={handleSelectChange}>
              <option value={''}>Menu</option>
              <option value="login">Log in</option>
              <option value="download">Download the app</option>
              <option value={''}>Customer support</option>
              <option value={''}>English</option>
              <option value={''}>ESalon for business</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
