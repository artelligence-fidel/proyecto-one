import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import DeleteUser from "../servises/DeleteUser";

class ListOfUsers extends React.Component {

    constructor() {
        super();
        /**
         * si sigues el estandar de js para nombrar variables 
         * debirias llamar tu lista listToShow 
         * primero por estandar
         * y segundo porque es mas claro de enternder
         */
        //esta linea no se si sea la forma corecta de hacerlo en react 
        this.listtoshow = JSON.parse(localStorage.getItem('localStorageUserList') || '[]') ;
    }
    /**
     * metodo local pra eliminar el usuario
     * porque una funcion ??
     * 1 porque tienes que eliminar en los usuarios almacenandos
     * 2 porque tambien tienes que eliminar en los usuarios mostrados - cuando des eliminar que desaparesca de la lista
     *   sin tener que refrescar la pagina
     * @param {Object<user>} user 
     */
    deleteUser(user) {
        //eliminar en almacenamiento
        DeleteUser(user.fullName);
        /**
         * TODO: aqui pones lo que te hace falta para eliminar de la lista
         */
    }
    render() {
        return (

            <React.Fragment>

                <div>
                    <h1>User List</h1>
                    <div>
                        {
                            this.listtoshow.map((user) => {
                                return (
                                    <li key={user.email} className="list-group list-group-numbered" >
                                        <Accordion>
                                            <Accordion.Item eventKey="0" >
                                                <Accordion.Header className=" $secondary"><span><strong>{user.fullName}</strong></span></Accordion.Header>
                                                <Accordion.Body>
                                                    <span>Elamil: {user.email}</span><br />
                                                    <span>Job Title: {user.jobTitle}</span><br />
                                                    <span>User Since: {user.userAdded}</span><br />
                                                    <span>Day of the last Loing: {user.userLoggedIn/*mirar para que no es quede basio al introducir el user por primera vers con el operador ternario*/}</span><br />
                                                    <button className="btn  btn-danger mt-3" onClick={() => { this.deleteUser(user) }}>Delete</button>
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
