 import React from 'react'
 import { useForm } from 'react-hook-form'; 
 import { useHistory } from "react-router-dom";  // esto es a lo que se le llama componete funcional en react, para el uso de la propiedad historio de brouseRouter de react

 


  
export default function Login(){ 
  let history = useHistory();

  //esta funcion es para regresar a la url que quiero que regrese
  function handleClick() {
    history.push("/list-of-users");
  }
  
    const {register,  handleSubmit, formState:{errors}} =
    useForm();

  

    const userList = JSON.parse(
      localStorage.getItem('localStorageUserList') || '[]');
      ///funcion (onSubmit) es para comprobar que el email y el password que se  esta  entrado por el form , este dentro de la lista de usuarios 
      // en el caso de "data", que puede ser cualquie nombre, es la variable que tiene los valores de los imput, que au ves se obtiene al llamar la variable registesr 
      const  onSubmit = (data) =>{
        const user = userList.find(u => u.email === data.email && u.password === data.password);
        // el 'if ' comprubara que si el usuario esta en la lista de usuarios y act acutalisa la hora de inicio de sesion y el dia de la mismay los guarda 
        if(user) {
          //y act acutalisa la hora de inicio de sesion y el dia de la mismay los guarda 
              user.userLoginTime = new Date().toLocaleTimeString()
              user.userLoginDate = new Date().toDateString()
              localStorage.setItem('localStorageUserList',JSON.stringify(userList))
              
              
              return handleClick();//en caso que se cumple la condicion entonses me redirecciona para la lita de usuarios
        } else {
            return alert('El usuario no esta registrado.')
        }
     
      
      }
     
      
    

    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="Container_Form">
      <form  className="from-group Form_Style " onSubmit={handleSubmit(onSubmit)/*llamando a la funcion onDubmit*/}>
        {/* register your input into the hook by invoking the "register" function */}
       
        <div>
           <label>E-mail</label> 
           <input 
           className="form-control" 
           id="email"
           {...register('email', {required: true})}/>
           {errors.email && <p className="text-danger"> the Email is required</p>}
        </div>
        <div>
           <label>Password</label> 
           <input 
           className="form-control"  type="password" 
                      {...register("password", {required: true})}/>
                      {/* include validation with required or other standard HTML validation rules */}
           {errors.password && <p className="text-danger">Password is required</p>}
        </div>
   
        
        
      <div className="mt-4">
       <button  className="btn btn-primary "  >Log In</button>
       
      </div>
      </form>
      </div>  );
  }
  
  
