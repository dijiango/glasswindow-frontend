//job listings api/fake job listings/manual entry 
import { Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import JobCard from '../Search/JobCard';

function SavedJobs(props) {
    const [savedJobsArr, setSavedJobsArr] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/applies")
        .then(response => response.json())
        .then(jobs => setSavedJobsArr(jobs))
    }, []);

    console.log(savedJobsArr);

    return (savedJobsArr.length > 0) ? (
        <div>
            {
                savedJobsArr.map((saved)=>{
                    return (
                            <JobCard key={saved.id} job={saved.job}/>
                    )
                })
            }
        </div>
    ) : <div><h2>Jobs you save will appear here.</h2></div> 
}

export default SavedJobs
