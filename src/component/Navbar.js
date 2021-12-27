import React from 'react'
import './style/Navbar.css' ;
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                   <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link" to="/login-user">Log In</Link>
                  </li>
                  <li className="nav-item">
                   <Link  className="nav-link" to="/sing-up-user">Sing Up</Link>
                  </li>
                  <li className="nav-item">
                   <Link  className="nav-link" to="/list-of-users">User List</Link>
                  </li>
               </ul>
          </React.Fragment>
                              
              
             
        );
    }
}
export default Navbar;