import React, {useState} from 'react'
import { Button, FormGroup, Paper, TextField } from '@mui/material';
import './Job.css';


const defaultValues = {
  job: '',
  location: '',
};

function JobSearchBar( props ) {
  const [values, setValues] = useState(defaultValues);

  function handleInput(e) {
    
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleFilter(values);
    setValues(defaultValues);
  }
  return (
    <div className='job-searchbar-wrapper'>
      <Paper className='job-searchbar-container' elevation={0}>
        <form onSubmit={handleSubmit}>
          <FormGroup row={true} sx={{margin: '0px 25px 0px', alignItems:'center', justifyContent:'center'}}>
        <label className='searchbar-label'>Search By...</label>
            <TextField 
              sx={{margin: '10px'}}
              placeholder="Search by title or company"
              name='job'
              value={values.job}
              onChange={handleInput}
            />
            <TextField
              sx={{margin: '10px'}}
              placeholder="Search by state"
              name='location'
              value={values.location}
              onChange={handleInput}
              />  
            <Button type='submit' color='success' variant='contained'>Submit</Button>
          </FormGroup>
          <span className='error'>{props.searchError}</span>
          <span className='refresh' onClick={()=> window.location.reload()}>{props.refresh}</span>
          
        </form>
      </Paper>
    </div>
  )
}

export default JobSearchBar