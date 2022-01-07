import react from 'react'

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
    .then(console.log)
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
    <h1>{props.jobInfo.title}</h1>
    <p>{props.jobInfo.company.name}</p>
    <img className='company-logo' src={props.jobInfo.company.image_url}></img>
    <button onClick={applyFunction}>Apply</button>
    <button onClick={() => deleteFunction()}>Not Interested</button>

</div>


)}
export default JobCard;