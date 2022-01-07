//job listings api/fake job listings/manual entry 
import { Paper } from '@mui/material';
import React, { useState } from 'react';
import JobCard from '../Search/JobCard';

function SavedJobs(props) {

    console.log("This was clicked", props.appliedJob);
    return (
        <div>
            {
                props.appliedJob.map((job)=>{
                    return (
                        <Paper elevation={3}>
                            <JobCard key={job.id} jobInfo={job}/>
                        </Paper>
                    )
                })
            }
        </div>
    )
}

export default SavedJobs
