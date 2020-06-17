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
              <div className="exercises">{this.state.exercises.map(item =>
              <div>{item.description}</div>
               )}</div>
        </div>
        )
    }
}

export default TrainingBody;