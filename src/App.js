import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Topbar from './components/Bars/Topbar';
import Sidebar from './components/Bars/Sidebar';
import Home from './components/Pages.js/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Resumes from './components/Pages.js/Resumes';
// import { Breadcrumbs } from '@mui/material';

function App() {

  return (
  <>
    <Topbar />
    <div className='appContainer'>
      <Sidebar />
      <div className='others'>
        <BrowserRouter>
          <Routes>
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
   
    
   
  </> 
  )

}

export default App;

