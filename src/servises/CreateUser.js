//VAS A COPIAR LO QUE EST AEN ELL REGISTER FOR, EN EL METODO ONSUBMIT PARA DESPUES PASARSELOS COMO UNA FUNCION APARTE
import React from "react";
//import { useForm } from "react-hook-form"; 
import moment from "moment";
export default function CreateUser(data){
    var time = moment();
    var  userList = JSON.parse(localStorage.getItem('localStorageUserList') || '[]') //compruevo si el localstore tine algun dat        //este funcion va a guardarme los datos en el localstorage      
    var  user = userList.find(u => u.email === data.email);
      if(user){alert("El usuario esta registrado")}
      else{
          //aca intoduje el operador spread(...) para asi agregar mas elemantos al array, como son los obeto de tipo date
        userList.push({ ...data, userAdded:time.format(' dddd DD MMMM YYYY   HH:mm:ss'), userLoggedIn:"Sesion no iniciada aun"});
        localStorage.setItem('localStorageUserList',JSON.stringify(userList));
        //esta funcion lo que haces es limpiar los campos despues de enviarlos al localstorage
      }
   
    }
    