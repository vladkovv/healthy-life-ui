import React from 'react';
import { NavLink } from 'react-router-dom';

import Personal from './personal'

class Profile extends React.Component {
    state = {username: '', firstName: '', lastName: '', height: '', weight: '', gender: '', birthDate: '', email: '', imgSource: ''}

    gettingUserData = async () => {
        const response = await fetch(`${this.props.url}/users/${this.props.id}`)
        const data = await response.json();
        this.setState({username: data.username, firstName: data.firstName, lastName: data.lastName, height: data.height, weight: data.weight, gender: data.gender, birthDate: data.birthDate, email: data.email, imgSource: data.imageSource});
    }

    componentDidMount() {
        this.gettingUserData()
    }


    render() {
    return(
        <div className="profile-page-body">
            <div className="profile-header">
                <div>
                 <NavLink exact to="/profile/personal">Personal info</NavLink>   
                </div>
                <div>
                 <NavLink exact to="/profile/trainings">Trainings</NavLink>  
                </div>
                <div>
                 <NavLink exact to="/profile/records">Records</NavLink>  
                </div>
                <div>
                 <NavLink exact to="/profile/achieves">Achievments</NavLink>  
                </div>
                <div>
                 <NavLink exact to="/profile/security">Security</NavLink>  
                </div>
            </div>
            <Personal getUser={this.gettingUserData} data={this.state} />
        </div>
    )
    }

}

export default Profile;