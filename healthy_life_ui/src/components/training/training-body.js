import React from 'react';
import { NavLink } from 'react-router-dom';

class TrainingBody extends React.Component {
    state = {}

        componentDidMount() {
            document.querySelector('training-content-body-header > div:first-chil > a').classList.add('active');
            
        }

    render() {
        return (
        <div className="training-content-body">
            <div className="training-content-body-header">
              {this.props.data.map(item => 
                  <div key={item.id}>
                      <NavLink to={`/training/day/${item.day}`}>Day {item.day}</NavLink>
                  </div>
              )}
            </div>
        </div>
        )
    }
}

export default TrainingBody;