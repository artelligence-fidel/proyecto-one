import React from "react";
import moment from"moment";

export default function UsoDeMoment(){
    const m = moment()
    //const formato = 'DD MMM  YYYY  LTS';
   
    console.log(m.format('LL  HH:mm:ss'))//esta la fecha dividida con "/" y la hora en militar
    return(
        <div><span>dfsf</span></div>
    );
}