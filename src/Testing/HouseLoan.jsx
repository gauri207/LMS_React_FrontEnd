import {  Button, Grid,  TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HouseLoan = () => {
  const navigate=useNavigate();
    const [loans, setloans] = useState({
      userId: "",
      LoanType:"House loan",
      ExceptedAmount:"",
      EndDate:"",
      Address: "",
      ImagePath:""
    });
    function onTextFieldChange(e) {
      setloans({
          ...loans,
          [e.target.name]: e.target.value
      })
  }
       
      async function onFormSubmit(e) 
      {
        await axios.post(`http://localhost:29472/api/Loan/ApplyLoan`,
        loans)
        .then(result => {
            console.log(result)
            alert(result.data)
            navigate('/ApplyLoan')
        })
       
       } 
       function Back(){
        navigate('/ApplyLoan')
       }
  return (
    <div>
    <h1>House Loan Form</h1>
     <Grid container>
       <Grid item md={4} xs={12}>
       
        <form noValidate>
        <Grid container spacing={1}>
 
         <Grid item xs={12} sm={12}>
             <TextField type="number" autoComplete='off' name='userId' fullWidth id="userId" variant='outlined' label="userId" autoFocus
             onChange={(e=>onTextFieldChange(e))}/>
         </Grid>
         
         <Grid item xs={12} sm={12}>
             <TextField  type="number" autoComplete='off' name='ExceptedAmount'  fullWidth id="ExceptedAmount" variant='outlined' label="ExceptedAmount" autoFocus
             onChange={(e=>onTextFieldChange(e))}/>
         </Grid>
         <Grid item xs={12} sm={12}>
             <TextField  type="date" autoComplete='off' name='EndDate'  fullWidth id="EndDate" variant='outlined'  autoFocus
             onChange={(e=>onTextFieldChange(e))}/>
         </Grid>
        <Grid item xs={12} sm={12}>
               <TextField type="text" autoComplete='off' name='Address' fullWidth id="Address" variant='outlined' label="Address" autoFocus
                onChange={(e=>onTextFieldChange(e))}/>
        </Grid>
        <Grid item xs={12} sm={12}>
              <TextField type="text" autoComplete='off' name='ImagePath' fullWidth id="ImagePath" variant='outlined' label="ImagePath" autoFocus
              onChange={(e=>onTextFieldChange(e))}/>
        </Grid>
          
       

 <Grid item xs={12} sm={12}>
       <Button type='button' variant='contained' onClick={e=>onFormSubmit(e)}>Submit</Button>
       <Button type='button' variant='contained' onClick={Back}>Back</Button>
  </Grid>
    </Grid>
       </form>
       </Grid>
  
    </Grid>
 </div>
  )
}

export default HouseLoan
