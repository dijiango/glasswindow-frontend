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
    //     body: JSON.stringify({ user_id: 20, job_id: props.jobInfo.id })
    // })
    // .then(response => response.json())
    // .then(data => console.log('success:', data));

    
    fetch('http://localhost:9292/applies',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user_id: 20, job_id: props.jobInfo.id })
        // body: JSON.stringify({name: 'Steve'})
    })
    .then(r => r.json())
    .then(data => props.savedJob(data))
    // console.log('something1')
}
    // .then(response => response.json())
    // .then( data => console.log(data))}


    const deleteFunction = () => {
        let id = props.jobInfo.id
        fetch(`http://localhost:9292/jobs/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        
       
    })
    window.location.reload()}
    // .then(r => r.json())
    // .then(console.log)



return(

<div className='card'>
    <img className='company-logo' src={props.jobInfo.company.image_url}></img>
    <span className='card-info'>
        <h1>{props.jobInfo.title}</h1>
        <p>{props.jobInfo.company.name}</p>
        <button onClick={applyFunction} style={bttnStyle}>Apply</button>
        <button onClick={() => deleteFunction()} style={bttnStyle}>Not Interested</button>
    </span>
    
</div>


)}
export default JobCard;