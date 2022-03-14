import React, {useState, useEffect} from 'react'
import './Job.css';
import JobCard from './JobCard';
import JobSearchBar from './JobSearchBar';



function JobSearch(props) {

    const [jobData, setJobData] = useState([]);
    const [searchError, setSearchError] = useState("")
    const [refresh, setRefresh] = useState("");

    const fetchFunction = () => {
        fetch('http://localhost:9292/jobs')
        .then(response => response.json())
        .then(data => setJobData(data))}
    useEffect(fetchFunction, [])

    // console.log(jobData[1].title);

    function handleFilter(jobs){
        // console.log("Only show these jobs", jobs.job);
        const jobString = jobs.job.toLowerCase();
        const locationString = jobs.location.toLowerCase();
        
        const result = jobData.filter((obj)=> {
            if (jobs.job !== '' && jobs.location === '') {
                return obj.title.toLowerCase().includes(jobString) || obj.company.name.toLowerCase().includes(jobString)
            } else if (jobs.job !== '' && jobs.location !== '') {
                return (obj.title.toLowerCase().includes(jobString) && obj.location.toLowerCase().includes(locationString)) || obj.company.name.toLowerCase().includes(jobString) && obj.location.toLowerCase().includes(locationString)    
            } else if (jobs.job === '' && jobs.location !== '') {
                return obj.location.toLowerCase().includes(locationString)
            } else if (jobs.job === '' && jobs.location === '') {
                return obj.title.length >= 0;
            }
            
        })
        
        console.log(result);
        if (result.length === 0) {
            setSearchError("No matches");
            setRefresh("Show all jobs")
        } else {
            setSearchError("")
            setRefresh("")
        }

        setJobData(result);
    }

    return (
        <div>
            <JobSearchBar job={jobData} setJobs={setJobData} handleFilter={handleFilter} searchError={searchError} refresh={refresh}/>
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
