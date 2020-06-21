import React from 'react';
import TrainingBody from './training-body';
import { Redirect } from 'react-router-dom';

class Training extends React.Component {

    state = {imageSource: '', name: '', description: '', days: []}

    gettingTrainInfo = async () => {
        let id = localStorage.getItem('trainId')
        let response =  await fetch(`${this.props.url}/trainings/${id}`)
        let data = await response.json()
        this.setState({imageSource: data.imageSource, name: data.name, description: data.description, days: data.daysOfTrainings})
    }

    componentDidMount() {
        this.gettingTrainInfo()
    }

    render() { 
        return(                       
        <div className='training-body'>
            <div className="training-content">
                <div className='training-content-head'>
                    <img alt="" src={this.state.imageSource}/>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.description}</h2>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <TrainingBody url={this.props.url} days={this.state.days}/>
            </div>
            <Redirect to={'/training/day/1'}/>
        </div>
    )
    }
}

export default Training;