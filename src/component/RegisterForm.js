//este es el de register, validacion y errores
// ver con manolito eel metodo createUser
import React from "react";
import { useForm } from "react-hook-form"; //libreria para trabajar con los formularios
import 'bootstrap/dist/css/bootstrap.css'
import './style/ReactHook.css'
import CreateUser from '../servises/CreateUser'
import moment, { localeData } from "moment";
export default function RegisterForm() {
//const time = moment()
  const {register,reset, handleSubmit, formState:{errors}} =  useForm();


const  onSubmit =(data)=>{
  CreateUser(data)//*ejemplo de como llamo a una funcion externa dentro de un componente funcional, el cual no se puede llamr fuena del metodo onSubmit 
      
      reset({ 
        fullName: '',
        email: '',
        password: '',
        jobTitle: ''
      })   
    
    
    
    }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    //el clasname es como react llama a los estyilos de css.
  <div className="Container_Form">
    <form  className="from-group Form_Style " onSubmit={handleSubmit(onSubmit)} >
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label>First Name</label> 
         <input 
         className="form-control" 
        
         
          {...register("fullName", { required: true })}/>
           {/* include validation with required or other standard HTML validation rules */}
            {errors.firstName && <p className="text-danger">First name is required</p>}
      </div>
    
      <div>
         <label>E-mail</label> 
         <input 
         className="form-control" 
       
         {...register('email', {required: true})}/>
      </div>
      <div>
         <label>Password</label> 
         <input 
         className="form-control"  type="password" 
         
         {...register("password", {required: true})}/>
      </div>
      <div>
         <label>Job Title</label> 
         <input 
         className="form-control" 
         
         {...register("jobtitle", {required: true})}/>
      </div>
      
      
      {/* include validation with required or other standard HTML validation rules */}
    <div className="mt-4">
    <button  className="btn btn-primary " >Register</button>
    
    </div>
    </form>
    </div>  );
}

