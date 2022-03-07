import React from 'react';

const bttnStyle = {
    margin: '25px 5px',
    padding: '5px'
}

function JobCard(props){

const applyFunction = (e) => {
    e.preventDefault();

    // fetch('http://localhost:9292/applies',{
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({ user_id: 20, job_id: props.job.id })
    // })
    // .then(response => response.json())
    // .then(data => console.log('success:', data));

    
    fetch('http://localhost:9292/applies',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user_id: 20, job_id: props.job.id })
        // body: JSON.stringify({name: 'Steve'})
    })
    .then(r => r.json())
    .then(data => props.savedJob(data))
    // console.log('something1')
}
    // .then(response => response.json())
    // .then( data => console.log(data))}


    const deleteFunction = () => {
        let id = props.job.id
        fetch(`http://localhost:9292/jobs/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        
       
    })
    window.location.reload()}
    // .then(r => r.json())
    // .then(console.log)



return(

<div className='card'>
    {/* <img className='company-logo' src={props.job.company.image_url}></img> */}
    <div className='card-preview'>
        <div className='card-left'>
            <div>
                <h1>{props.job.title}</h1>
                <h3>{props.job.company.name}</h3> 
                <h4>Date Uploaded</h4>

                <button onClick={applyFunction} style={bttnStyle}>Apply</button>
                <button onClick={() => deleteFunction()} style={bttnStyle}>Not Interested</button>
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
</div>


)}
export default JobCard;