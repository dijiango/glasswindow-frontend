import React, {useState, useEffect} from 'react'
import './Job.css';
import JobCard from './JobCard';
import JobSearchBar from './JobSearchBar';



function JobSearch(props) {

    const [jobData, setJobData] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    const fetchFunction = () => {
        fetch('http://localhost:9292/jobs')
        .then(response => response.json())
        .then(data => setJobData(data))}
    useEffect(fetchFunction, [])

    
    useEffect(()=> {
        fetch('http://localhost:9292/applies')
        .then(response => response.json())
        .then(obj => setSavedJobs(obj));
    }, []);

    console.log(savedJobs[1].id);
    // function saveJob(id) {
    //     props.saveJob(id);
    // }

    return (
        <div>
            <JobSearchBar />
        <div className='search-page'>
            {jobData.map(
                (eachJob) => {
                    return (<JobCard key={eachJob.id} job={eachJob} savedJobs={savedJobs}/>)
                }
            )}
        </div>
        </div>
    )
}

export default JobSearch
