import React from 'react';
import Landing from './Pages/Home/Landing';
import LoginLanding from './Pages/Login/LoginLanding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
