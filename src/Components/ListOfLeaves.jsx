import axios from 'axios';
import React from 'react'
import ApplyLeaveService from "../Services/ApplyLeaveService";
export default class ListOfLeaves extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            leaves:[]
        }
    }
    componentDidMount()
    {
        axios.post('http://localhost:2983/api/LeaveDetails/Leavedetailsemployee?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })
        // ApplyLeaveService.getLeaves().then((res) =>{
        //     this.setState({leaves:res.data});
        // })
    }
    render()
    {
        return(
        <div>
            <h2 className='text-center'>Apply Leaves List</h2>
            <br /><br />
            <div className='row card-body'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Apply Leave Id</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Number Of Days</th>
                            <th>Leave Type</th>
                            <th>Leave Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.leaves.map(
                                leave =>
                                <tr key={leave.applyLeaveId}>
                                    <td>{leave.applyLeaveId}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.numberOfDays}</td>
                                    <td>{leave.leaveType}</td>
                                    <td>{leave.leaveReason}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )}
}