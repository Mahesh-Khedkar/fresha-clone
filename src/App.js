import React from 'react';
import Landing from './Pages/Home/Landing';
import LoginLanding from './Pages/Login/LoginLanding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersLogin from './Pages/Login/CustomersLogin';
import BusinessLogin from './Pages/Login/BusinessLogin';

const App = () => {
  return (
    // <div>
    //   <Landing/>
    //   {/* <LoginLanding/> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LoginLanding />} />
        <Route path='/customerLogin' element={<CustomersLogin />} />
        <Route path='/businessLogin' element={<BusinessLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
