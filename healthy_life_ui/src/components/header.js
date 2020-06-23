import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {

   const clearId = () => {
       if(localStorage.myId) {
        let myId = localStorage.getItem('myId')
        localStorage.setItem('id', myId)
       }
    }

    if(!props.status) {
        return (
            <div className="header-before-auth">

            <div>
                <NavLink to="/" onClick={clearId}>Trainings</NavLink>
            </div>

               
            <div>
                <NavLink to="/reg" onClick={clearId}>Sign up</NavLink>
            </div>

            <div>
                <NavLink to="/auth" onClick={clearId}>Sign in</NavLink>
            </div>

    </div>
        )
    }
 
    return (
        <div className="header-before-auth">
            <div>
                <NavLink to="/" onClick={clearId}>Trainings</NavLink>
            </div>

            <div>
                <NavLink to='/' onClick={props.logOut}>Log out</NavLink>
            </div>
            <div>
                <NavLink to="/profile" onClick={clearId}>Profile</NavLink>
            </div>

            <div>
                <NavLink to="/users" onClick={clearId}>Users</NavLink>
            </div> 
        </div>
    )
} 

export default Header;