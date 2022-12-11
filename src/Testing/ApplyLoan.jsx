import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const ApplyLoan = () => {
  const navigate=useNavigate();
  function houseApi(){
    navigate('/HouseLoan')
  }
  function EductionApi(){
    navigate('/EductionLoan')
  }
  return (
    <div>

      <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={houseApi}>Apply House Loan</Button>
     </Grid>
     <br/>
     <Grid item xs={12} sm={12}>
            <Button type='button' variant='contained' onClick={EductionApi}>Apply Eduction Loan</Button>
     </Grid>
    </div>
  )
}

export default ApplyLoan
