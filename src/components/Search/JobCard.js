import React, { useState, useEffect } from 'react';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { IconButton, Tooltip } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import moment from 'moment';
import StarRating from './StarRating';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import DomainIcon from '@mui/icons-material/Domain';

function JobCard(props) {
    const [isPreview, setIsPreview] = useState(true);

    const applyFunction = (jobID) => {
            fetch('http://localhost:9292/applies',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({job_id: jobID})
            })
    }



    const deleteFunction = (id) => {
        fetch(`http://localhost:9292/jobs/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    window.location.reload()
    }
    
    const handleExpand = () => {
        setIsPreview(!isPreview);
    }


return (isPreview) ? (
<div className='card-wrapper'>
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
                <h4>Last updated on {moment(props.job.updated_at).format("MMMM Do")}</h4>
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
    <div className='expand-option'>
        <IconButton className='expand-bttn' disableRipple={true} onClick={handleExpand}><ArrowCircleDownIcon className='card-bttn' fontSize='large'/></IconButton>
    </div>
</div>
) : (
    <div className='card-wrapper'>
    <div className='card-expanded'>
        <div className='logo-div'>
            <IconButton className='collapse-bttn' onClick={handleExpand}><HighlightOffIcon className='card-bttn' fontSize='large'/></IconButton>
            <img className='company-logo' src={props.job.company.image_url}></img>
        </div>
        <header>
            <h1>{props.job.title}</h1>
            <h4 className='updated-at-expanded'>Job last updated on {moment(props.job.updated_at).format("MMMM Do")}</h4>
            <h3>{props.job.company.name} | <StarRating key={props.job.id} starsNum={props.job.company.rating}/></h3> 
        </header>
        <section className='expanded-section'>
           <article className='expanded-article'>
               <ul><Tooltip title='location'><LocationOnIcon /></Tooltip> {"    "}{props.job.location}, US </ul>
               <ul><Tooltip title='salary'><AttachMoneyIcon /></Tooltip> {props.job.salary ? `    ${props.job.salary.toLocaleString()}` : `no salary provided`} </ul>
               <ul><Tooltip title='education level'><SchoolIcon /></Tooltip> {props.job.education ? `    ${props.job.education} degree required` : `no education level provided`} </ul>
            </article>
            <article className='expanded-article'>
                <ul><Tooltip title='employment type'><WorkIcon /></Tooltip> {props.job.employment_type ? `    ${props.job.employment_type}` : `no employment type provided`} </ul>
                <ul><Tooltip title="company'\s industry"><DomainIcon /></Tooltip> {props.job.company.industry ? `    ${props.job.company.industry} services` : `no industry provided`} </ul>
            </article> 
        </section>
        <section className='expanded-description'>
            <header className='description-header'>Job Description</header>
            <article>Lorem Ipsum</article>
        </section>
        <section className='expanded-bttn-group'>
            <button className='expanded-bttns' onClick={() => applyFunction(props.job.id)}>Save this Job</button>
            <button className='expanded-bttns' onClick={() => deleteFunction(props.job.id)}>Not Interested</button>
        </section>
    </div>
    </div>
)
}

export default JobCard;