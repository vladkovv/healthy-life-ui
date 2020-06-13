import React from 'react';
import { NavLink } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class Trainings extends React.Component {
    state = {
        trainings: []
    }

    gettingTrainings = async () => {
        const response = await fetch(`${this.props.url}/trainings`);
        const data =  await response.json();

        data.map(item => {
            const obj = {name: item.name, description: item.description, imgSource: item.imageSource}
            this.setState({
             trainings: [...this.state.trainings, obj],
            })
          })
    }

    componentDidMount() {
        this.gettingTrainings()
    }

    render() {
        return(
            <div className="trainings-body">
                <h1 className="trainings-title">Choose whatever you want</h1>
                <div className="trainings-content">
                    {this.state.trainings.map(item => 
                      <div className="train-cards">
                          <div className="card-name">{item.name}</div>
                          <div className="trains-image">
                              <img src={item.imgSource} alt="" />
                          </div>
                          <div className="card-description">{item.description}</div>
                          <div className="card-link" >
                          <NavLink className="link-more" to="">Learn More</NavLink>
                          <ArrowForwardIcon className="link-arrow" />
                          </div>
                      </div>  
                        )}
                </div>
            </div>
        )
    }
}

export default Trainings;