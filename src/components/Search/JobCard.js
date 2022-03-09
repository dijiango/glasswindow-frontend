import React, { useState } from 'react';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { IconButton, Tooltip } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import moment from 'moment';

// const bttnStyle = {
//     margin: '25px 10px 25px 0px',
//     padding: '5px'
// }

function JobCard(props) {

    const applyFunction = (jobID) => {
    fetch('http://localhost:9292/applies',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({job_id: jobID})
    })
    // .then(response => response.json())
    // .then(data => setSavedJobsArr(data));
    }


    const deleteFunction = (id) => {
        fetch(`http://localhost:9292/jobs/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    window.location.reload()
    }
    // .then(r => r.json())
    // .then(console.log)


return (

<div className='card'>
    {/* <img className='company-logo' src={props.job.company.image_url}></img> */}
    <div className='card-preview'>
        <div className='card-left'>
            <div className='quick-actions'>
                <h1>{props.job.title}</h1>
                <Tooltip title="Not Interested">
                    <IconButton onClick={() => deleteFunction(props.job.id)}><DoNotDisturbIcon className='card-bttn'/></IconButton>
                </Tooltip>
                <Tooltip title="Save">
                    <IconButton onClick={() => applyFunction(props.job.id)}><BookmarkIcon className='card-bttn'/></IconButton>
                </Tooltip>
            </div>
            <div className='job-info'>
                <h3>{props.job.company.name}</h3> 
                <h4>Last updated on {moment(props.job.updated_at).format("dddd, MMMM Do")}</h4>
            </div>
                

        </div>
        <div className='card-right'>
                <aside>
                    <h4>{props.job.employment_type}</h4>
                    <h4> {props.job.location}, USA</h4>
                    <h4>Education Level: {props.job.education} degree</h4>
                </aside>
        </div>
    </div>
    <div className='card-fullview'>
        <IconButton className='expand-bttn' disableRipple='true'><ArrowCircleDownIcon className='card-bttn' fontSize='large'/></IconButton>
    </div>
</div>
)}
export default JobCard;