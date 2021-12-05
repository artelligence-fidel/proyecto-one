import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


class ListOfUsers extends React.Component{
    

    listtoshow=[];
    render(){
        return(
        
        <React.Fragment>
            
           <div>
               <h1>Us er List</h1>
               <div>
                   
                   
                  
                    {
                       
                       this.listtoshow =JSON.parse(
                        localStorage.getItem('localStorageUserList') || '[]'),
                        this.listtoshow.map((user)=>{
                            return(
                               
                                <li key={user.email} className="list-group list-group-numbered" >
                                     <Accordion>
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header className=" $secondary"><span>{user.fullName}</span></Accordion.Header>
                                              <Accordion.Body>
                                                <span>Elamil: {user.email}</span><br/>
                                                <span>Job Title: {user.jobTitle}</span><br/>
                                                <span>User Since: {user.userAddIt}</span><br/>
                                                <span>Day of the last Loing: {user.userLoginDate}</span><br/>
                                                <span>Timeof the last Loing: {user.userLoginTime}</span>
                                              
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