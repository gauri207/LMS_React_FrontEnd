import React from "react";
import {Routes,Route,Link} from 'react-router-dom';

class EmployeeDashboard extends React.Component
{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div>
                <h1>Employee Dashboard</h1>
                <h2>loged in user:{localStorage.getItem('user')}</h2><br/><br/>
                <ul>
                <li><Link to='/applyleave'>Apply For Leave</Link></li>
                <li><Link to='/leaveslist'>LeaveList</Link></li>
                <li><Link to='/mydetails'>MyDetails</Link></li>
                <li><Link to='/mymanagerdetails'>MyManagerDetails</Link></li>
                </ul>
            </div>
            
        )
    }
}

export default EmployeeDashboard;