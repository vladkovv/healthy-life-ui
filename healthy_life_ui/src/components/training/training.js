import React from 'react';
import TrainingBody from './training-body';
import { Redirect } from 'react-router-dom';
import { Fade } from '@material-ui/core';

class Training extends React.Component {

    state = {imageSource: '', name: '', description: '', days: []}

    gettingTrainInfo = async () => {
        let id = localStorage.getItem('trainId')
        let response =  await fetch(`${this.props.url}/trainings/${id}`)
        let data = await response.json()
        this.setState({imageSource: data.imageSource, name: data.name, description: data.description, days: data.daysOfTrainings})
    }

    followButtonClick = (e) => { 
       
        if(e.target.classList.contains('follow-button')) {

        e.target.classList.remove('follow-button')
        e.target.classList.add('unfollow-button')
        e.target.innerText = 'Unfollow'
        this.addTraining()
        } else {
            e.target.classList.remove('unfollow-button')
            e.target.classList.add('follow-button')
            e.target.innerText = 'Follow'
            this.deleteTraining()
        
    }
    }

    addTraining = async () => {
        let id = localStorage.getItem('id')
        let trainId = localStorage.getItem('trainId')
        return await fetch(`${this.props.url}/users/${id}/trainings/${trainId}`, {
            method: 'PUT'
        })
    }

    deleteTraining = async () => {
        let id = localStorage.getItem('id')
        let trainId = localStorage.getItem('trainId')
        return await fetch(`${this.props.url}/users/${id}/trainings/${trainId}`, {
            method: 'DELETE'
        })
    } 

    checkingFollow = async () => {
        let currId = localStorage.getItem('id')
        let trainId = localStorage.getItem('trainId')
        let response = await fetch(`${this.props.url}/users/${currId}/trainings`)
        let data = await response.json()
        data.map(item => {
            if(trainId == item.id) {
                let elem = document.querySelector('.follow-button')
                elem.className = 'unfollow-button'
                elem.textContent = 'Unfollow' 
                } 
        }) 
    }

    componentDidMount() {
        this.gettingTrainInfo()
        this.checkingFollow()
    }

    render() { 
        return(                       
        <div className='training-body'>
            <Fade in>
            <div className="training-content">
                <div className='training-content-head'>
                    <img alt="" src={this.state.imageSource}/>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.description}</h2>
                        <button className="follow-button" onClick={this.followButtonClick}>Follow</button>
                    </div>
                </div>
                <TrainingBody url={this.props.url} days={this.state.days}/>
            </div>
            </Fade>
            <Redirect to={'/training/day/1'}/>
        </div>
    )
    }
}

export default Training;