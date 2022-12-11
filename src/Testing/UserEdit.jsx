import { Button, Grid, TextField, Typography } from '@mui/material'
import { deepPurple, green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


//http://localhost:64969/api/User/Edit User?id=2003
const UserEdit = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        userName:"",
        password:"",
        email: "",
        address:"",
        state:"",
        country:""
    });
    useEffect(() => {
        async function getStudent() {
            try {
                const student = await axios.get(`http://localhost:64969/api/User/UserById?id=${id}`)
                // console.log(student.data);
                setStudent(student.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getStudent();
    }, [id]);
    //
    function onTextFieldChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:64969/api/User/EditUser?id=${id}`, student)
            history(`/Loans/${id}`)
        } catch (error) {
            console.log("Something is Wrong");
        }
    } 
   
    return (
        <div>
            <Box textAlign='center' p={2} mb={2} sx={{ backgroundColor: deepPurple[400], color: 'white' }}>
                <Typography variant='h2'>
                  <h1>Edit user</h1>
                </Typography>
            </Box>
            <Grid container justify="center" spacing={4}>
                <Grid item md={12} xs={12}>
                    
                    <form>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value={id} disabled />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="name" variant="outlined" required fullWidth id="name" value={student.name} onChange={e => onTextFieldChange(e)} label="Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="off" name="userName" variant="outlined" required fullWidth id="userName" label="userName" value={student.userName} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type='password'autoComplete="off" name="password" variant="outlined" required fullWidth id="password" label="password" value={student.password} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            
                         
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="email" variant="outlined" required fullWidth id="email" label="email" value={student.email} onChange={e => onTextFieldChange(e)}  />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="address" variant="outlined" required fullWidth id="address" label="address" value={student.address} onChange={e => onTextFieldChange(e)}  />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="off" name="state" variant="outlined" required fullWidth id="state" label="state" value={student.state} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="off" name="country" variant="outlined" required fullWidth id="country" label="country" value={student.country} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                           
                            
                        </Grid>
                        <Box m={3}>
                            <Button type="button" variant="contained" color="primary"
                                onClick={e => onFormSubmit(e)}> Update </Button>
                        </Box>
                    </form>
                   
                </Grid>
            </Grid>
        </div>
    )
}
export default UserEdit