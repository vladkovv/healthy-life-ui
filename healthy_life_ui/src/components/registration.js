import React from 'react';
import { Button } from 'react-bootstrap';

class Registration extends React.Component {

    state = {username: '', password: '', firstName: '', lastName: '', email: '', gender: ''}

    handleUserName = (event) => {
        this.setState({username: event.target.value})
        console.log(this.state)
    }
    
    handlePassword = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state)
    }

    handleFirstName = (event) => {
        this.setState({firstName: event.target.value})
        console.log(this.state)
    }

    handleLastName = (event) => {
        this.setState({lastName: event.target.value})
        console.log(this.state)
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
        console.log(this.state)
    }

    handleGender = (event) => {
        this.setState({gender: event.target[event.target.selectedIndex].value})
        console.log(this.state)
    }

    onRegistration = async () => {
        return await fetch(`${this.props.url}/users`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, gender: this.state.gender})
        })
    }

    render() {
        return(
            <div className="reg-body">
                <div className='reg-window'>
                    <h4>Регистрация</h4>  
                    <div className="reg-window-content">
                        <input placeholder='Введите ваш email...' onChange={this.handleEmail}/>
                        <input placeholder='Придумайте себе имя пользователя...' onChange={this.handleUserName}/>
                        <input placeholder='Придумайте пароль...' onChange={this.handlePassword}/>
                        <input placeholder='Введите ваше Имя...' onChange={this.handleFirstName}/>
                        <input placeholder='Введите вашу Фамилию...' onChange={this.handleLastName}/>
                        <select onChange={this.handleGender}>
                            <option>Укажите ваш пол:</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <Button variant='success' className='reg-button' onClick={this.onRegistration}>
                            Зарегистрироваться
                        </Button>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Registration;