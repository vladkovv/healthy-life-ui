import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route,  Redirect } from 'react-router-dom';


import Personal from './personal'

class Profile extends React.Component {
    state = {}

    

    componentDidMount() {
        document.querySelector('.active-link').classList.add('active');
        document.querySelectorAll('.not-active-link').forEach(item => item.addEventListener('click', () => {
            if(document.querySelector('.active-link').classList.contains('active')) {
                document.querySelector('.active-link').className = 'active-link';
            }
        }));
    }


    render() {
    return(
        <div className="profile-page-body">
            <div className="profile-header">
                <div>
                 <NavLink  to="/profile/personal" className='active-link'>Personal info</NavLink>   
                </div>
                <div>
                 <NavLink  to="/profile/trainings" className='not-active-link'>Trainings</NavLink>  
                </div>
                <div>
                 <NavLink  to="/profile/records" className='not-active-link'>Records</NavLink>  
                </div>
                <div>
                 <NavLink  to="/profile/achieves" className='not-active-link'>Achievments</NavLink>  
                </div>
                <div>
                 <NavLink  to="/profile/security" className='not-active-link'>Security</NavLink>  
                </div>
            </div>
            <BrowserRouter>
            <Redirect to={'/profile/personal'}/>
            <Route exact path='/profile/personal' render={(props) => <Personal url={this.props.url}  id={this.props.id}  {...props}/>}/>
            </BrowserRouter>
        </div>
    )
    }

}

export default Profile;