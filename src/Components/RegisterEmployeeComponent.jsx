import React from "react";
import axios from "axios";
import ListOfEmployees from "./ListOfEmployees";

class RegisterEmployeeComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'',
            mobileno:'',
            emailid:'',
            datejoined:'',
            designation:'',
            manager:'',
            salary:'',
            password:''
        }
    }
    changeNameHandler=(event)=>
    {
        this.setState({name: event.target.value})
    }
    changeMobileNoHandler=(event)=>
    {
        this.setState({mobileno: event.target.value})
    }
    changeEmailIdHandler=(event)=>
    {
        this.setState({emailid: event.target.value})
    }
    changeDateJoinedHandler=(event)=>
    {
        this.setState({datejoined: event.target.value})
    }
    changeDesignationHandler=(event)=>
    {
        this.setState({designation: event.target.value})
    }
    changeManagerHandler=(event)=>
    {
        this.setState({manager: event.target.value})
    }
    changeSalaryHandler=(event)=>
    {
        this.setState({salary: event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password: event.target.value})
    }

     registerEmployee=async (e)=>
    {
        
        e.preventDefault();
        console.log(this.state.name,this.state.mobileno,this.state.emailid,this.state.datejoined,this.state.designation,this.state.manager,this.state.salary,this.state.password);
        const result=await axios.post(
            'http://localhost:2983/api/Employee/Register',
            {
                "employeeId":0,
                "name":this.state.name,
                "mobileNo":this.state.mobileno,
                "emailId":this.state.emailid,
                "dateJoined":this.state.datejoined,
                "designation":this.state.designation,
                "managerName":this.state.manager,
                "salary":this.state.salary,
                "password":this.state.password
            }
        );
        

    }

    

    render(){
        return(
            <div className="container">
                <div className="card-body">
                    <h1>Employee Registration</h1>
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" name="name"
                            onChange={this.changeNameHandler}
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Mobile no:</label>
                            <input className="form-control" name="mobileno"
                            onChange={this.changeMobileNoHandler}
                            value={this.state.mobileno}/>
                        </div>
                        <div className="form-group">
                            <label>Email Id:</label>
                            <input className="form-control" name="emailid"
                            onChange={this.changeEmailIdHandler}
                            value={this.state.emailid}/>
                        </div>
                        <div className="form-group">
                            <label>Date joined:</label>
                            <input  className="form-control" name="datejoined" type="date"
                            onChange={this.changeDateJoinedHandler}
                            value={this.state.datejoined}/>
                        </div>
                        <div className="form-group">
                            <label>Designation:</label>
                            <input className="form-control" name="designation"
                            onChange={this.changeDesignationHandler}
                            value={this.state.designation}/>
                        </div>
                        <div className="form-group">
                            <label>Manager:</label>
                            <input className="form-control" name="manager"
                            onChange={this.changeManagerHandler}
                            value={this.state.manager}/>
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input className="form-control" name="salary" 
                            onChange={this.changeSalaryHandler}
                            value={this.state.salary}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" name="password" type="password"
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div><br/>
                        <button className="btn btn-primary" onClick={this.registerEmployee}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterEmployeeComponent;