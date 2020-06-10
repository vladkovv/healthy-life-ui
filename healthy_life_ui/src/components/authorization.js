import React from 'react';
import {Redirect} from 'react-router-dom';

class Authorization extends React.Component {
    state = {login: "", password: ""}

    onLoginChange = (event) => {
        this.setState({login: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onAuth = async (e) => {
        e.preventDefault();
        let response = await fetch(`${this.props.url}/auth/signin`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username: this.state.login, password: this.state.password})
        })
        let result = await response.json();

        if(result.token) {
        this.props.onAuth(result.id)
        }
        
        else {
          alert('Проверьте логин/пароль')
        }
    }

    render() {
      if(this.props.status) return <Redirect to={'/'} />
    return (
      <div className="auth-body">
        <div className="auth-form">
          <div className="auth-content">
          <h1>Login</h1>
          <div className="auth-fields">
            <h2>Username</h2>
            <input type='text' onChange={this.onLoginChange} />
            <h2>Password</h2>
            <input type="password" onChange={this.onPasswordChange}/>
          </div>
            <button className="auth-button"  onClick={this.onAuth}>LOGIN</button>
          </div>
        </div>

      </div>
    )
}}

export default Authorization;