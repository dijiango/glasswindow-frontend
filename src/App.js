import React, {useState} from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import useToken from './useToken';
import { Paper } from '@mui/material';

import Topbar from './components/Bars/Topbar';
import Sidebar from './components/Bars/Sidebar';
import Home from './components/YourFiles/Home';
import Signup from './components/AccountValidation/Signup';
import Login from './components/AccountValidation/Login';
import UserProfile from './components/UserProfile';
import Resumes from './components/YourFiles/Resumes';
import CoverLetters from './components/YourFiles/CoverLetters';
import Applications from './components/YourFiles/Applications';
import SavedJobs from './components/YourFiles/SavedJobs';
import ResumeBuilder from './components/CreateNew/ResumeBuilder';
import CreateCV from './components/CreateNew/CreateCV';
import Companies from './components/Search/Companies';
import JobSearch from './components/Search/JobSearch';



function App() {
  // const { token, setToken } = useToken();

  

  // if(!token){
  //     return ( <Login setToken={setToken}/>)
  // }
  // else
  
  return (
  <>
    <Topbar />
    <div className='appContainer'>
      <Sidebar />
      <div className='others'>
        <BrowserRouter>
          <Routes>
            <Route path="/search/jobs" element={<JobSearch />} />
            <Route path="/search/companies" element={<Companies />} />

            <Route path="/create/cv" element={<CreateCV />} />
            <Route path="/create/resume" element={<ResumeBuilder />} />

            <Route path="/yourfiles/savedjobs" element={<SavedJobs />} />
            <Route path="/yourfiles/applications" element={<Applications />} />
            <Route path="/yourfiles/cv" element={<CoverLetters />} />
            <Route path="/yourfiles/resumes" element={<Resumes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserProfile />} />
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

