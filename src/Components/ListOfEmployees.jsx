import React from "react";
import EmployeeService from "../Services/EmployeeService";

class ListOfEmployees extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            employees:[]
        }
    }

    componentDidMount()
    {
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data});
        })
    }
    render()
    {
        return(
            <div>
                <h2 className="text-center">Employees List</h2><br/><br/>
                <div className="row">
                    <table className="table table-striped table-bodered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    emp=>
                                    <tr key={emp.employeeId}>
                                        <td>{emp.employeeId}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.emailId}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.salary}</td>
                                        {/* <button className="btn btn-primary">Login</button> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListOfEmployees;