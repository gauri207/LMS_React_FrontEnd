import React from 'react';


const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg ' style={{background: "#bbe9db"}} >
            <div className='container-fluid'>
                <a href="/" className='navbar-brand'>
                    <img src="https://th.bing.com/th/id/OIP.YMlcItwqDOzdVfdgcVgq9QHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="hexaware" style={{height:'50px',borderRadius:"50%"}}/>
                </a>

                <button className='navbar-toggler' type="button" data-bs-toggler="collapse" data-bs-target="#nav"></button>
                <div className='collapse navbar-collapse' id='nav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                           <a className='nav-link active' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                           <a className='nav-link active' href='/login'>Login</a>
                        </li>
                        <li className='nav-item'>
                           <a className='nav-link active' href='/register'>Register</a>
                        </li>
                       
                        <li className='nav-item'>
                           <a className='nav-link active' href='/employeesList'>Employees List</a>
                        </li>
                        {/* <li className='nav-item'>
                           <a className='nav-link active' href='/applyleave'>Apply For Leave</a>
                        </li> */}
                        

                        <li className='nav-item'  >
                           <h4 > <b>
                              <a className='nav-link active' href='' style = {{color: "#900048"}}>
                              Leave Management System
                              </a>
                            </b></h4>
                        </li>
                        

                    </ul>
                </div>
            </div>

        </nav>
        
    </div>
  )
}

export default Navbar