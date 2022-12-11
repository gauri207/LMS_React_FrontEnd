import { Box, Button, Grid, TextField,Tooltip, IconButton ,Typography } from '@mui/material'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const UserLogin = () => {
     const navigate=useNavigate();
    const [userId, setuserId]=useState("");
    const [Password, setPassword]=useState("");
    const [id,setid]=useState();
    
    const handleApi = () => {
        console.log({userId, Password})

        // toast('login successful')
        axios.post('http://localhost:64969/api/User/Login',{
            userId: userId,
            Password : Password
        })
        .then(result => {
            console.log(result)
                 alert(result.data)
                 if(result.data=="Success"){
                 navigate(`/Loans/${userId}`)
                 }
                 else{
                    navigate(`/UserLogin`)
                 }
        })
    }
  return (
    <div>
        <h1>
            This Is UserLogin
        </h1>
        <Grid container>
        <form noValidate>
         <Grid container spacing={1}>
            
            <Grid item xs={12} sm={12}>
                <TextField  type="number" autoComplete='off' name='userId' fullWidth id="userId" variant='outlined' label="Id" autoFocus
                onChange={(e)=>setuserId(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField type="password" autoComplete='off' name='Password' fullWidth id="Password" variant='outlined' label="Password" autoFocus
                onChange={(e)=>setPassword(e.target.value)}/>
            </Grid>
         
            
            <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={handleApi} >
                Login</Button>
            </Grid>
         </Grid>
         </form>
        </Grid>
        
    </div>
  )
}

export default UserLogin