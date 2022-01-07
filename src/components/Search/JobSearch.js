import React, {useState, useEffect} from 'react'
import JobCard from './JobCard';



function JobSearch() {

    const [jobData, setJobData] = useState([]);

    const fetchFunction = () => {
        fetch('http://localhost:9292/jobs')
        .then(response => response.json())
        .then(data => setJobData(data))}
    useEffect(fetchFunction, [])
    return (
        <div>
            {jobData.map(
                
                (eachJob) => {

                    return (<JobCard key={eachJob.id} jobInfo={eachJob}/>)


            })}
        </div>
    )
}

export default JobSearch
