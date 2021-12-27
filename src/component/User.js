import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style/User.css'
import GetUser from '../servises/GetUser'
class User extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <div className=' u-section-1 border-top border-bottom shadow-sm p-3 mb-5  rounded bg-secondary'>
                        <div className='d-flex justify-content-center mb-4 headerUser rounded-bottom'>
                            <h1 className='text-light'>User Datalies</h1>
                         </div>
                            <div>
                                <span className='fw-normal d-flex flex-column bd-highlight mb-3 text-light'>Full Name: {GetUser.fullName} </span>
                                <span className='fw- d-flex flex-column bd-highlight mb-3 text-light'>Email: {this.props.email}</span>   
                                <span className='fw-normal d-flex flex-column bd-highlight mb-3 text-light'>Job Title: {this.props.jobTitle}</span>
                                <span className='fw-normal d-flex flex-column bd-highlight mb-3 text-light'>User was Added :{this.props.userAdded}</span>
                                <span className='fw-normal d-flex flex-column bd-highlight mb-3 text-light'>last time User Login: {this.props.userLoggedIn}</span>
                             </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default User;
