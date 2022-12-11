import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ApplyForLeave from './Components/ApplyForLeave';
import Navbar from './Navbar/Navbar';
import Welcome from './Components/Welcome';
import EmployeeDashboard from './Components/EmployeeDashboard';
import ListOfLeaves from './Components/ListOfLeaves';
import LoginEmployeeComponent from './Components/LoginEmployeeComponent';
import RegisterEmployeeComponent from './Components/RegisterEmployeeComponent';
import ListOfEmployees from './Components/ListOfEmployees';
import EmployeeDetails from './Components/EmployeeDetails';
import ManagerDetails from './Components/ManagerDetails';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <br/>
      <hr/>
      <ul className='ul'>
      <li><Link to='/'>Employeelist</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        
       
      </ul>
     
      <Routes>
        <Route path="/" element={<ListOfEmployees/>}> </Route>
        <Route path="/login" element={<LoginEmployeeComponent/>}> </Route>
        <Route path="/register" element={<RegisterEmployeeComponent/>}> </Route>
        <Route path="/applyleave" element={<ApplyForLeave />}> </Route> 
        <Route path="/leaveslist" element={<ListOfLeaves/>}> </Route>
        <Route path='/dashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/mydetails' element={<EmployeeDetails />}></Route>
        <Route path='/mymanagerdetails' element={<ManagerDetails />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/employeesList' element={<ListOfEmployees/>}></Route>
      </Routes>
    
      {/* <ApplyForLeave/> */}
      {/* <Validation /> */}
    </div>
    
    </>
  );
}

export default App;
