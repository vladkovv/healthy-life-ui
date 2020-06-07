import React from 'react';

const Private = (props) => {
    return(
        <div>
        <h2>Личная информация</h2>
        <div className='profile-private-first'>
        <div>
        <div>Имя пользователя:</div>
        <div>{props.data.username}</div>
        </div>
        <div>
        <div>Имя:</div>
        <div>{props.data.firstName}</div>
        </div>
        <div>
        <div>Фамилия:</div>
         <div>{props.data.lastName}</div>
        </div>
        </div>
        <div className='profile-private-second'>
        <div>
        <div>Рост:</div>
        <div>{props.data.height}</div>
        </div>
        <div>
        <div>Вес:</div>
        <div>{props.data.weight}</div>
        </div>
        <div>
        <div>Пол:</div>
         <div>{props.data.gender}</div>
        </div>
        </div>
        <div className='profile-private-third'>
        <div>
        <div>Дата рождения:</div>
        <div>{props.data.birthDate}</div>
        </div>
        <div>
        <div>Email:</div>
        <div>{props.data.email}</div>
        </div>
        </div>
        </div>
    )
}
class Profile extends React.Component {
    state = {username: '', firstName: '', lastName: '', height: '', weight: '', gender: '', birthDate: '', email: ''}

    gettingUserData = async () => {
        const response = await fetch(`${this.props.url}/users/${this.props.id}`)
        const data = await response.json();
        this.setState({username: data.username, firstName: data.firstName, lastName: data.lastName, height: data.height, weight: data.weight, gender: data.gender, birthDate: data.birthDate, email: data.email});
    }

    componentDidMount() {
        this.gettingUserData()
    }


    render() {
    return(
        <div className="profile-page-body">
            <div className="profile-content">
                <div className="profile-header">
                <div className="profile-header-name">
                    <div>
                        <div>
                        Имя пользователя: {this.state.username}
                        </div>
                        <div>
                        {this.state.firstName} {this.state.lastName}
                        </div>
                        </div> 
                </div>
            </div>
                <Private data={this.state} />
        </div>
        </div>
    )
    }

}

export default Profile;