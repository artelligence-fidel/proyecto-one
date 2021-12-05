import React from "react";
import ListOfUsers from "../component/ListOfUsers";


class UserList extends React.Component{
    render(){
        return(
           
           <React.Fragment>
               <ListOfUsers/>
           </React.Fragment>
        )
    }
}
export default UserList;