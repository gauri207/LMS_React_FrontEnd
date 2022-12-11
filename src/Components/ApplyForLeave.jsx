import React from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListOfLeaves from './ListOfLeaves';
export default class ApplyForLeave extends React.Component{
        constructor(){
            super();
            this.state ={
                startDate:'',
                endDate:'',
                numberOfDays:'',
                leaveType:'',
                leaveReason:'',
                
            }
        }
        changeStartDateHandler =(e)=>
        {
            this.setState({startDate:e.target.value})
        }
        changeEndDateHandler =(e)=>
        {
            this.setState({endDate:e.target.value})
        }
        changeNumberOfDaysHandler =(e)=>
        {
            this.setState({numberOfDays:e.target.value})
        }
        changeLeaveTypeHandler =(e)=>
        {
            this.setState({leaveType:e.target.value})
        }
        changeLeaveReasonHandler =(e)=>
        {
            this.setState({leaveReason:e.target.value})
        }

        saveLeaves = (e) =>
        {
            e.preventDefault();
            console.log("SaveLeaves called");
            console.log(this.state.startDate,this.state.endDate,this.state.numberOfDays,this.state.leaveType,this.state.leaveReason);
            axios.post('http://localhost:2983/api/LeaveDetails',
            
            {
                // data:JSON.stringify({
                
                    // 'ApplyLeaveId':0,
                    // // "EmployeeId":0,
                    // "StartDate":'2022-12-08',
                    // "EndDate":'2022-12-08',
                    // "NumberOfDays":2,
                    // "LeaveType":'Earned Leave',
                    // "LeaveReason":'Personal Issues',

                    

                    "ApplyLeaveId":0,
                    // "EmployeeId":0,
                    "StartDate":this.state.startDate,
                    "EndDate":this.state.endDate,
                    // "NumberOfDays":this.state.numberOfDays,
                    "NumberOfDays":this.state.numberOfDays,
                    "LeaveType":this.state.leaveType,
                    "LeaveReason":this.state.leaveReason,
                    "EmployeeId":localStorage.getItem('user')
                // })
                     
            }    
                );
                // console.log(result);
        }

        render()
        {
            return(
                <>
                <Card className='BgColor-Card'>
                <CardContent>
                <div className='container'>
                    <div className='card-body '>
                        <h5><i>Apply For Leave</i></h5>
                        <form>
                            <div className='form-group'>
                                <nobr>
                                <label className='avoidbreakline'>Start Date:</label>
                                <input type='date' className='form-control' name='startDate' 
                                onChange={this.changeStartDateHandler}
                                value={this.state.startDate}/>
                                </nobr>

                            </div>
                            <div className='form-group'>
                                <label>End Date:</label>
                                <input type='date' className='form-control' name='endDate' 
                                onChange={this.changeEndDateHandler}
                                value={this.state.endDate}/>

                            </div>
                            <div className='form-group'>
                                <label>Number Of Days:</label>
                                <input  className='form-control' name='numberOfDays' 
                                onChange={this.changeNumberOfDaysHandler}
                                value={this.state.numberOfDays}/>

                            </div>
                            <div className='form-group'>
                                <label>Leave Type:</label>
                                <input type='text' placeholder='Earned Leave' className='form-control' name='leaveType' 
                                onChange={this.changeLeaveTypeHandler}
                                value={this.state.leaveType}/>

                            </div>
                            <div className='form-group'>
                                <label>Leave Reason:</label>
                                <input type='textarea' className='form-control' name='leaveReason' 
                                onChange={this.changeLeaveReasonHandler}
                                value={this.state.leaveReason}/>

                            </div>
                            <button className='btn btn-success' onClick={this.saveLeaves}>
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
                </CardContent>
                </Card>

                <ListOfLeaves/>
                </>
            )
        }
}