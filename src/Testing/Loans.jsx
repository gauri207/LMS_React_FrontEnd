import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
//import { Box, Button, Grid, TableCell, TableContainer, TextField, Typography } from '@mui/material'
import { deepOrange, deepPurple, orange } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Loans = () => {
    const { id } = useParams();
    const [user,setuser]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>
      {
        async function getAllData()
        {
            try{
           const user=await axios.get(`http://localhost:64969/api/User/UserById?id=${id}`)
           console.log(user.data);
           setuser(user.data)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        getAllData()
      },[])
    function loans(){
        navigate('/ApplyLoan')
    }
    function  status(){
        navigate(`/LoanstatusbyId/${id}`)
    }
  return (
    <div>
        <Box textAlign="center" sx={{backgroundColor:deepPurple[400],color:"white"}}>
            <Typography variant='h4'>user Details</Typography>
        </Box>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>id.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>name.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>userName.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>password.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>email.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>address.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>state.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>country.</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161'}}>Action.</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    <TableRow>
                       <TableCell align='center'>{user.id}</TableCell>
                       <TableCell align='center'>{user.name}</TableCell>
                       <TableCell align='center'>{user.userName}</TableCell>
                       <TableCell align='center'>{user.password}</TableCell>
                       <TableCell align='center'>{user.email}</TableCell>
                       <TableCell align='center'>{user.address}</TableCell>
                       <TableCell align='center'>{user.state}</TableCell>
                       <TableCell align='center'>{user.country}</TableCell>
                      
                      
                       <Tooltip title="edit" >
                            <IconButton>
                                <Link to={`/UserEdit/${user.id}`}><EditIcon color='primary' align='center'></EditIcon></Link>
                            </IconButton>
                       </Tooltip>
                      
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={loans}>Apply loan</Button>
     </Grid>
     <br/>
     <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={status}>loan status</Button>
     </Grid>
    </div>
  )
}

export default Loans
