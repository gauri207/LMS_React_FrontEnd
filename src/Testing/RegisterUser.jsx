import {  Button, Grid,  TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const RegisterUser = () => {
   const navigate=useNavigate();
    const [Register, setRegister] = useState({
        Name: "",
        UserName:"",
        Password:"",
        Email: "",
        Address:"",
        Country:""
    });
    function onTextFieldChange(e) {
        setRegister({
            ...Register,
            [e.target.name]: e.target.value
        })
    }
    async function onFormSubmit(e) {
        await axios.post(`http://localhost:64969/api/User/RegisterNewUser`,
         Register)
        .then(result => {
            console.log(result)
            alert(result.data)
            navigate('/UserLogin')
        })
        .catch(error => {
            console.log(error)
            alert("User Register failed")
        })
     } 
    
    return (
      <div>
       <h1>Register User</h1>
        <Grid container>
          <Grid item md={4} xs={12}>
          
           <form noValidate>
           <Grid container spacing={1}>
    
            <Grid item xs={12} sm={12}>
                <TextField type="text" autoComplete='off' name='Name' fullWidth id="Name" variant='outlined' label="Name" autoFocus
                onChange={(e=>onTextFieldChange(e))}/>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField type="text" autoComplete='off' name='UserName' fullWidth id="UserName" variant='outlined' label="UserName" autoFocus
                onChange={(e=>onTextFieldChange(e))}/>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField  type="password" autoComplete='off' name='Password' fullWidth id="Password" variant='outlined' label="Password" autoFocus
                onChange={(e=>onTextFieldChange(e))}/>
            </Grid>
           <Grid item xs={12} sm={12}>
                  <TextField type="email" autoComplete='off' name='Email' fullWidth id="Email" variant='outlined' label="Email" autoFocus
                   onChange={(e=>onTextFieldChange(e))}/>
           </Grid>
           <Grid item xs={12} sm={12}>
                 <TextField type="text" autoComplete='off' name='Address' fullWidth id="Address" variant='outlined' label="Address" autoFocus
                 onChange={(e=>onTextFieldChange(e))}/>
           </Grid>
             <Grid item xs={12} sm={12}>
                <TextField  type="text" autoComplete='off' name='State' fullWidth id="State" variant='outlined' label="State" autoFocus
                onChange={(e=>onTextFieldChange(e))}/>
           </Grid>
           <Grid item xs={12} sm={12}>
                     <TextField type="text" autoComplete='off' name='Country' fullWidth id="Country" variant='outlined' label="Country" autoFocus
                     onChange={(e=>onTextFieldChange(e))}/>
           </Grid>

    <Grid item xs={12} sm={12}>
          <Button type='button' variant='contained' onClick={e=>onFormSubmit(e)}>Submit</Button>
     </Grid>
       </Grid>
          </form>
          </Grid>
     
       </Grid>
    </div>
  )
}
 export default RegisterUser

