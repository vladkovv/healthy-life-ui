import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {

    if(!props.status) {
        return (
            <div className="header-before-auth">

            <div>
                <NavLink to="/">Trainings</NavLink>
            </div>

               
            <div>
                <NavLink to="/reg">Sign up</NavLink>
            </div>

            <div>
                <NavLink to="/auth">Sign in</NavLink>
            </div>

    </div>
        )
    }
 
    return (
        <div className="header-before-auth">
            <div>
                <NavLink to="/">Trainings</NavLink>
            </div>

            {/* <div>
                <NavLink to='/training'>Train</NavLink>
            </div> */}
            <div>
                <NavLink to='/'>Log out</NavLink>
            </div>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div>
                <NavLink to="/users">Users</NavLink>
            </div>

            
        </div>
    )
} 

export default Header;