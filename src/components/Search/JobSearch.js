import React, {useState, useEffect} from 'react'
import JobCard from './JobCard';
import JobSearchBar from './JobSearchBar';



function JobSearch(props) {

    const [jobData, setJobData] = useState([]);

    const fetchFunction = () => {
        fetch('http://localhost:9292/jobs')
        .then(response => response.json())
        .then(data => setJobData(data))}
    useEffect(fetchFunction, [])



    function clickedJob(id) {
        props.savedJob(id);
    }

    return (
        <div>
            <JobSearchBar />
            {jobData.map(
                
                (eachJob) => {

                    return (<JobCard key={eachJob.id} jobInfo={eachJob} savedJob={clickedJob}/>)


            })}
        </div>
    )
}

export default JobSearch
