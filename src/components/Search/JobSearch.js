import React, {useState, useEffect} from 'react'
import './Job.css';
import JobCard from './JobCard';
import JobSearchBar from './JobSearchBar';



function JobSearch(props) {

    const [jobData, setJobData] = useState([]);

    const fetchFunction = () => {
        fetch('http://localhost:9292/jobs')
        .then(response => response.json())
        .then(data => setJobData(data))}
    useEffect(fetchFunction, [])



    // function saveJob(id) {
    //     props.saveJob(id);
    // }

    return (
        <div>
            <JobSearchBar />
        <div className='search-page'>
            {jobData.map(
                (eachJob) => {
                    return (<JobCard key={eachJob.id} job={eachJob} />)
                }
            )}
        </div>
        </div>
    )
}

export default JobSearch
