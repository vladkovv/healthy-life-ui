import React from 'react';
import TrainingBody from './training-body';
import { Redirect } from 'react-router-dom';
import { Fade } from '@material-ui/core';

class Training extends React.Component {

    state = {imageSource: '', name: '', description: '', days: [], trainDeleted: false}

    gettingTrainInfo = async () => {
        let id = localStorage.getItem('trainId')
        let response =  await fetch(`${this.props.url}/trainings/${id}`)
        let data = await response.json()
        this.setState({imageSource: data.imageSource, name: data.name, description: data.description, days: data.daysOfTrainings, followers: data.followersCount})
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

    deleteTrainingFormBD = async () => {
        let trainId = localStorage.getItem('trainId')
        let response = await fetch(`${this.props.url}/trainings/${trainId}`, {
            method: 'DELETE'
        })
        let data = response.json()
        this.setState({trainDeleted: true})
        
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
        if(this.props.status) {
        this.checkingFollow()
    }
}

    render() { 
        if(this.state.trainDeleted) {
            return <Redirect to={'/'} /> 
        }
        return(                       
        <div className='training-body'>
            <Fade in>
            <div className="training-content">
                <div className='training-content-head'>
                    <img alt="" src={this.state.imageSource}/>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.description}</h2>
                        {this.props.status && <button className="follow-button" onClick={this.followButtonClick}>Follow</button>}
                        <div className='followers'>Followers: {this.state.followers}</div>
                        <button className='delete-train-button' onClick={this.deleteTrainingFormBD}>delete</button>
                    </div>
                </div>
                <TrainingBody url={this.props.url} days={this.state.days}/>
            </div>
            </Fade>
        </div>
    )
    }
}

export default Training;