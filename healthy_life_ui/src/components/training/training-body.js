import React from 'react';
import { NavLink } from 'react-router-dom';

class TrainingBody extends React.Component {
    state = {id: '', exercises: []}

    
    handleExercisesDay = (e) => {
        this.setState({id: Number(e.target.id)}, () => {
        this.props.data.map(item => {
            if(item.day === this.state.id) {
                this.setState({exercises: item.exercises})
                return
            }
        })
    })}

    initialExerciseDay = () => {
       let elem = document.querySelector('a.days')
       console.log(elem)
        
    }

    componentDidMount() {
        this.initialExerciseDay()
    }

    render() {
        return (
        <div className="training-content-body">
            <div className="training-content-body-header">
              {this.props.data.map(item => 
                  <div key={item.id}>
                      <NavLink to={`/training/day/${item.day}`} id={item.day} className="days" onClick={this.handleExercisesDay}>Day {item.day}</NavLink>
                  </div>
              )}
            </div>
                <div className='exercises'>
                    <h2>Exercises</h2>
              {this.state.exercises.map(item =>
                <div className="exercise">
                    <div className="exercise-div-img">
                        <img className='exercise-img' src={item.imageSource}/>
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