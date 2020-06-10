import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
 
    return (
        <div className="header-before-auth">
            <div>
                <NavLink to="/">Home</NavLink>
            </div>

            {props.status ||
            <div>
                <NavLink to="/reg">SIGN UP</NavLink>
            </div>
}

            {props.status  ||
            <div>
                <NavLink to="/auth">SIGN IN</NavLink>
            </div>
}
            {props.status &&
            <div>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
}
            {props.status &&
            <div>
                <NavLink to="/users">Пользователи</NavLink>
            </div>
}
            
        </div>
    )
} 

export default Header;