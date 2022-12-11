import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import axios from 'axios';
import React, {  useEffect } from 'react'
import {useState } from 'react'
import { Link} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate, useParams } from "react-router-dom";
const LoanstatusbyId=()=>{
    const { id } = useParams();
    const [loan,setLoan]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>
    {
        async function getloanData()
        {
            try{
             const loan=await axios.get(`http://localhost:29472/api/Loan/allloans?id=${id}`)
             console.log(loan.data);
             setLoan(loan.data)
            }
            catch(err)
            {
                console.log(err)
            }    
        }
        getloanData();
    },[]);
    //     const back=()=>
    //   {
    //   navigate(`/Loans/${id}`)
    //   }
      return(
        <div>
            {/* <h1>hello</h1> */}
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>LoanId</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>userId</TableCell>
                        <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>LoanType</TableCell>
                <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>ToadyDate</TableCell>
                <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>EndDate</TableCell>
                <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>ExpectedAmount</TableCell>
                <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>Address</TableCell>
               
                <TableCell  align='center' style={{backgroundColor:'#616161',color:'white'}}>imagePath</TableCell>
                {/* <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>Image</TableCell> */}
                <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>Status</TableCell>
                {/* <TableCell align='center' style={{backgroundColor:'#616161',color:'white'}}>Action</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        loan.map((item,index)=>{
                    return(
                    <TableRow>
                        <TableCell align='center'>{item.loanId}</TableCell>
                        <TableCell align='center'>{item.userId}</TableCell>
                        <TableCell align='center'>{item.loanType}</TableCell>
                        <TableCell align='center'>{item.todayDate}</TableCell>
                        <TableCell align='center'>{item.endDate}</TableCell>
                        <TableCell align='center'>{item.exceptedAmount}</TableCell>
                        <TableCell align='center'>{item.address}</TableCell>
                        {/* <TableCell >{item.imagePath}</TableCell> */}
                        {/* <div><img src={item.imagePath} alt="doc" style={{width: '100px'}}/></div>  */}
                        <div style={{ margin: '50px' }}>
                          <img src={item.imagePath} alt="react logo" style={{ height:'250px' ,width: '250px', }}/>
                              </div>
                        <TableCell align='center'>{item.status}</TableCell>
                        {/* <TableCell align='center'>
                        <Tooltip title="edit">
                               <IconButton>
                                <Link to={``}><EditIcon/></Link>
                               </IconButton>
                                </Tooltip>
                        </TableCell> */}
                        
                        </TableRow>
                    )
                        })
                    }
                        </TableBody>
                        </Table>
                        </TableContainer>
                        {/* <Grid item xs={12} sm={12}>
                            <Button type='button' variant='contained' fullWidth onClick={back}>Login</Button>
                        </Grid> */}
        </div>
      )
    }


export default LoanstatusbyId