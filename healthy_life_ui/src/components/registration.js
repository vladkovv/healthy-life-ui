import React from 'react';
import { Redirect } from 'react-router-dom';
import { Fade } from '@material-ui/core';

class Registration extends React.Component {

    state = {username: '', password: '',  email: '', success: ''}

    handleUserName = (event) => {
        this.setState({username: event.target.value})
    }
    
    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }


    onRegistration = async () => {
        let response = await fetch(`${this.props.url}/users/registration`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username: this.state.username, password: this.state.password,  email: this.state.email})
        })
        let result = await response.json();
        console.log(result)

        if(result.username) {
            this.setState({success: true})
        }
        if(result.error) {
            alert('Account with this username is already exist')
        }
    }

    render() {
        if(this.state.success) return(<Redirect to={'/auth'} />)
        
        return(
    <div className="reg-body">
        <Fade in>
        <div className="reg-form">
          <div className="reg-content">
          <h1>Sign Up</h1>
          <div className="reg-fields">
          <h2>Email</h2>
            <input type='email' onChange={this.handleEmail} />
            <h2>Username</h2>
            <input type='text' onChange={this.handleUserName} />
            <h2>Password</h2>
            <input type="password" onChange={this.handlePassword}/>
          </div>
            <button className="auth-button"  onClick={this.onRegistration}>SIGN UP</button>
          </div>
        </div>
        </Fade>
      </div>
        )
    }
}

export default Registration;