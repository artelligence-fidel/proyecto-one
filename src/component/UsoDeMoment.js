import React from "react";
import moment from"moment";

export default function UsoDeMoment(){
    const m = moment().format('MMMM Do YYYY, h:mm:ss a')
    
    console.log(m)
    return(
        <div><span>dfsf</span></div>
    );
}