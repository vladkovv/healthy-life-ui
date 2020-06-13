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
            const obj = {name: item.name, description: item.description, imgSource: 'data:image/jpeg;base64,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'}
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
                <h1 className="trainings-title">Choose your favorite</h1>
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