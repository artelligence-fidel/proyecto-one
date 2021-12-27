
export default function DeleteUser(userFullName){
    const userList = JSON.parse(localStorage.getItem('localStorageUserList') || '[]');
    const newUserList = userList.filter(user => user.fullName!==userFullName)
  
   
       
            localStorage.setItem('localStorageUserList',JSON.stringify(newUserList));
    
    
        
    }   
