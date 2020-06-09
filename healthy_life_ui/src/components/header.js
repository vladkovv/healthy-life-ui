import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    let authButton;

    if(props.status) {
        authButton = <NavLink to="/">Выход</NavLink>
    } else {
        authButton = <NavLink to="/auth">Авторизация</NavLink>
    }
 
    return (
        <div className="header">
            <div>
                <NavLink to="/">Главная</NavLink>
            </div>

            <div>
                {authButton}
            </div>
            <div>
                <NavLink to="/reg">Регистрация</NavLink>
            </div>

            <div>
                <NavLink to="/profile">Профиль</NavLink>
            </div>

            <div>
                <NavLink to="/users">Пользователи</NavLink>
            </div>
            
        </div>
    )
} 

export default Header;