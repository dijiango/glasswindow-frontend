import React, {useState} from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import useToken from './useToken';

import Topbar from './components/Bars/Topbar';
import Sidebar from './components/Bars/Sidebar';
import Home from './components/YourFiles/Home';
import Signup from './components/Signup';
import Login from './components/Login/Login';
import Resumes from './components/YourFiles/Resumes';
import CoverLetters from './components/YourFiles/CoverLetters';
import Applications from './components/YourFiles/Applications';
import SavedJobs from './components/YourFiles/SavedJobs';
import ResumeBuilder from './CreateNew/ResumeBuilder';
import CreateCV from './CreateNew/CreateCV';
import Companies from './Search/Companies';
import JobSearch from './Search/JobSearch';



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
            <Route path="/search/companies" element={<JobSearch />} />
            <Route path="/search/jobs" element={<Companies />} />

            <Route path="/create/cv" element={<CreateCV />} />
            <Route path="/create/resume" element={<ResumeBuilder />} />

            <Route path="/yourfiles/savedjobs" element={<SavedJobs />} />
            <Route path="/yourfiles/applications" element={<Applications />} />
            <Route path="/yourfiles/cv" element={<CoverLetters />} />
            <Route path="/yourfiles/resumes" element={<Resumes />} />
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

