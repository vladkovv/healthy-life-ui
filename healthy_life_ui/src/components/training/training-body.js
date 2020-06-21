import React from 'react';
import { NavLink } from 'react-router-dom';

class TrainingBody extends React.Component {
    state = {dayId: '1', exercises: []}

    
    handleExercisesDay = async (e) => {
        this.setState({dayId: Number(e.target.id)}, () => {
            this.getExercisesData()
        })
            
    }
    getExercisesData = async() => {
        let trainId = localStorage.getItem('trainId')
        let response = await fetch(`${this.props.url}/trainings/${trainId}/days/${this.state.dayId}/exercises`)
        let data = await response.json()
        this.setState({exercises: data})
    }
    render() {
        return (
        <div className="training-content-body">
            <div className="training-content-body-header">
              {this.props.days.map(item =>
                  <div key={item.id}>
                      <NavLink to={`/training/day/${item.day}`} id={item.day} className="days" onClick={this.handleExercisesDay}>Day {item.day}</NavLink>
                  </div>
              )}
            </div>
                <div className='exercises'>
                    <h2>Exercises</h2>
              {this.state.exercises.map(item =>
                <div key={item.id} className="exercise">
                    <div className="exercise-div-img">
                        <img className='exercise-img' src={item.imageSource} alt=''/>
                    </div>
                    <div className="exercise-info">
                        <h2>{item.name}</h2>
                        <div className='counts'>
                            <div>count: {item.count}</div>
                            <div>reiteration: {item.reiteration}</div>
                        </div>
                        <div className="exercise-description">{item.description}</div>
                    </div>
                </div>
               )}
               </div>
        </div>
        )
    }
}

export default TrainingBody;