import React from 'react';

class ProfileTrainings extends React.Component {

    state = {trainings: []}

    gettingUserTrainings = async () => {
        let response = await fetch(`${this.props.url}/users/${this.props.id}`)
        let data = await response.json()
        data.trainings.map(item => {
            const obj = {name: item.name, description: item.description, imgSource: item.imageSource, id: item.id}
            this.setState({
                trainings: [...this.state.trainings, obj]   
               })
        })
    }

    componentDidMount() {
        this.gettingUserTrainings()
    }

    render() {
        return(
            <div className="content-profile-tranings">
                {this.state.trainings.map(item => 
                    <div key={item.id} className="profile-training">
                        <div className='profile-training-img'>
                            <img alt='' src={item.imgSource} />
                        </div>
                        <div className='profile-training-info'>
                            <h2>{item.name}</h2>
                            <div>{item.description}</div>
                            <button className='profile-training-button'>Details</button>
                        </div>
                    </div>
                )}
            </div> 
        )
    }
}

export default ProfileTrainings;