import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const AdminLogin = () => {
     const navigate=useNavigate();
    const [adminId, setadminId]=useState("");
    const [Password, setPassword]=useState("");

    const handleApi = () => {
        console.log({adminId, Password})
        // toast('login successful')
        axios.post('http://localhost:31462/api/Admin/AdminLogin',{
            adminId : adminId,
            Password : Password
        })
        .then(result => {
            alert(result.data)
          if(result.data=="Invlid Id"){
            navigate("/AdminLogin");
          }
          else{
            navigate("/AdminAllLoans");
          }

        })
        .catch(error => {
            console.log(error)
            alert("Invalid Password");
        })
    }
  return (
    <div>
        <h1>
            This Is AdminLogin
        </h1>
        <Grid container>
        <form noValidate>
         <Grid container spacing={1}>
            
            <Grid item xs={12} sm={12}>
                <TextField  type="number" autoComplete='off' name='adminId' fullWidth id="adminId" variant='outlined' label="Id" autoFocus
                onChange={(e)=>setadminId(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField type="password" autoComplete='off' name='Password' fullWidth id="Password" variant='outlined' label="Password" autoFocus
                onChange={(e)=>setPassword(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={handleApi}>Login</Button>
            </Grid>
         </Grid>
         </form>
        </Grid>
        
    </div>
  )
}

export default AdminLogin