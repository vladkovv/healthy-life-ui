import React from 'react';
import { Fade } from '@material-ui/core';

class Security extends React.Component {

    state = {}

    render() {
        return (
            <Fade in>
            <div className="content-security">
            <h2>Change Password</h2> 
            <div className="security-fields">
                <div>
                <h2>current password</h2>
                <input type='password'/>
                <h2>confirm password</h2>
                <input type='password'/>
                </div>
                <div>
                    <h2>new password</h2>
                    <input type="password"/>
                    <button className="security-button">Change</button>
                </div>
            </div>
            </div>
            </Fade>
        )
    }
}

export default Security;