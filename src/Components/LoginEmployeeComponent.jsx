import React from "react";
import axios from "axios";
import EmployeeService from "../Services/EmployeeService";

class LoginEmployeeComponent extends React.Component
{
    constructor()
    {
        
        super();
        this.state={
            EmployeeId:'',
            Password:'',
            errors:{}//empty obj
            // user:''
        }
    }
    changeEmployeeIdHandler=(event)=>
    {
        this.setState({EmployeeId: event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({Password: event.target.value})
    }

    formValidation =()=>{
        console.log("Inside validation 1")
        const {EmployeeId,Password}=this.state;
        let isValid =true;
        const errors ={};
        if(this.state.EmployeeId.length ==0 ){
            errors.employeeIdLength ="Please enter your Username**";
            isValid=false;
            console.log("Inside validation 2")
        }

        if(this.state.Password.trim().length ==0 ){
            errors.employeePassword ="Please enter your Password**";
            isValid=false;
            console.log("Inside validation 3")
        }
        this.setState({errors});
        console.log(isValid)
        console.log(errors)
        return isValid;

        
    }
    onFormSubmit =(e) =>
    {
         e.preventDefault();
        //******************** */
        const isValid =this.formValidation();
        if(isValid == true){
            this.Login();
        }
    }
    Login=(e)=>
    {
        
        //******************** */
        // const isValid =this.formValidation();
        // if(isValid){

        console.log("Inside login")
        const result=EmployeeService.loginEmployee(
            {
                "Id":0,
                "EmployeeId":this.state.EmployeeId,
                "Password":this.state.Password
            }
        )
        .then((result) => {   
            if (result.data.status === 'Invalid')  
                alert(result.data.message);  
            else  
                alert('Login successfull');
                localStorage.setItem('user',this.state.EmployeeId); 
                window.location='/dashboard';
                
        }) 
    // }
    }

    render(){
        const {errors} =this.state;
        return(
            <div className="container">
                <div className="card-body">
                    <h1>Login</h1>
                    <form >
                        <div className="form-group">
                            <label>Employee Id:</label>
                            <input className="form-control" name="employeeid" 
                            onChange={this.changeEmployeeIdHandler}
                            value={this.state.EmployeeId}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password"
                            onChange={this.changePasswordHandler}
                            value={this.state.Password}/>
                        </div>
                        <button type ="submit" className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>
                        {
                            Object.keys(this.state.errors).map((item)=>{
                                return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
                            })}
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginEmployeeComponent;