import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="header">
            <div>
                <NavLink to="/">Главная</NavLink>
            </div>

            <div>
                <NavLink to="/auth">Авторизация</NavLink>
            </div>

            <div>
                <NavLink to="/users">Пользователи</NavLink>
            </div>
            
        </div>
    )
} 

export default Header;