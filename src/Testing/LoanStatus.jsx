import { Button, Grid, TextField, Typography } from '@mui/material'
import { deepPurple, green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const LoanStatus = () => {
    const { id,status } = useParams();
    const history = useNavigate();
    const [loanstatus, setStatus] = useState({
        status: ""
    });
    useEffect(() => {
        async function getStatus() {
            try {
                const loanstatus = await axios.get(`http://localhost:31462/api/Admin/Approvie?id=${id}&status=${status}`)
                // console.log(student.data);
                setStatus(loanstatus.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getStatus();
    }, []);
    //
    function onTextFieldChange(e) {
        setStatus({
            ...loanstatus,
            [e.target.name]: e.target.value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:31462/api/Admin/Approvie?id=${id}&status=${loanstatus.status}`, loanstatus)
            history("/AdminAllLoans")
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
   
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                <Grid item md={12} xs={12}>
                    <Box textAlign="center" p={2} mb={2} sx={{
                        backgroundColor: green[400],
                        color: "white"
                    }}>
                        <Typography variant="h4">Edit Loan Status</Typography>
                    </Box>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value={id} disabled />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="off" name="status" variant="outlined" required fullWidth id="status" value={loanstatus.status} onChange={e => onTextFieldChange(e)} label="Status" />
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
export default LoanStatus
