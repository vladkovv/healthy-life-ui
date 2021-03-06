import React from 'react';
import {Redirect} from 'react-router-dom';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Fade } from '@material-ui/core';


class Authorization extends React.Component {
    state = {login: "", password: "", success: false}

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
        this.props.onAuth(result.id, result.token)
        this.setState({success: true})
        }
        
        else {
          alert('Login or password is not correct')
        }
    }

    render() {
      if(this.props.status) return <Redirect to={'/'} />
    return (
      <div className="auth-body">
        <Fade in>
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
            {/* <div className='auth-error'>Account with this username already exist</div> */}
          </div>
        </div>
        </Fade>
      </div>
      
    )
}}

export default Authorization;