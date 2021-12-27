import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import DeleteUser from "../servises/DeleteUser";

class ListOfUsers extends React.Component{
    

    listtoshow=[];
    render(){
        return(
        
        <React.Fragment>
            
           <div>
               <h1>User List</h1>
               <div>
                   
                   
                  
                    {
                       
                       this.listtoshow =JSON.parse(localStorage.getItem('localStorageUserList') || '[]'),
                        this.listtoshow.map((user)=>{
                            return(
                               
                                <li key={user.email} className="list-group list-group-numbered" >
                                     <Accordion>
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header className=" $secondary"><span><strong>{user.fullName}</strong></span></Accordion.Header>
                                              <Accordion.Body>
                                                <span>Elamil: {user.email}</span><br/>
                                                <span>Job Title: {user.jobTitle}</span><br/>
                                                <span>User Since: {user.userAdded}</span><br/>
                                                <span>Day of the last Loing: {user.userLoggedIn/*mirar para que no es quede basio al introducir el user por primera vers con el operador ternario*/}</span><br/>
                                                <button className="btn  btn-danger mt-3" onClick={DeleteUser(user.fullName)}>Deleter</button>                                        
                                             </Accordion.Body>
                                        </Accordion.Item>
                                       
                                    </Accordion>
                    
  
                                    
                                </li>

                            );
                        
                        })
                    }
                       
                 
               </div>
           </div>
            
        </React.Fragment>
        );
    
        }
}
export default ListOfUsers;