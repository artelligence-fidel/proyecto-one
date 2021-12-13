
import React from "react";
//revisar la funcion pq me parese que le pasamos es el id para que lo busque dentro del local store 
export default function FindUser(userList){
   userList = JSON.parse(
    localStorage.getItem('localStorageUserList') || '[]'//compruevo si el localstore tine algun dato
  );
  userList.map(user) 
    const id = user.email 
  

  
    return id;
}