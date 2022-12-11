import axios from "axios";
const EMPLOYEE_API_BASE_URL="http://localhost:2983/api/Employee";

class EmployeeService
{
    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    loginEmployee(login)
    {
        return axios.post(EMPLOYEE_API_BASE_URL+"/Login",login);
    }
}

export default new EmployeeService();