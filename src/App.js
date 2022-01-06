import React, {useState} from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Topbar from './components/Bars/Topbar';
import Sidebar from './components/Bars/Sidebar';
import HomePage from './components/Pages/HomePage';
import Signup from './components/Signup';
import Login from './components/Login/Login';
import Resumes from './components/Pages/Resumes';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  

  if(!token){
      return ( <Login setToken={setToken}/>)
  }
  else
  
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
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<HomePage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
   
    
   
  </> 
  )

}

export default App;

