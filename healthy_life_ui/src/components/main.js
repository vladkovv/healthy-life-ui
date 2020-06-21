import React from 'react';
import { Redirect } from 'react-router';
import { Fade } from '@material-ui/core';

class Trainings extends React.Component {
    state = {
        trainings: [],
        referrer: false
    }

    redirectToTraining = (e) => {
        let trainId = Number(e.target.id)
        localStorage.setItem('trainId', trainId)
        this.setState({referrer: !this.state.referrer}) 
    }

    gettingTrainings = async () => {
        const response = await fetch(`${this.props.url}/trainings`);
        const data =  await response.json();

        data.map(item => {
            const obj = {name: item.name, description: item.description, imgSource: item.imageSource, id: item.id}
            this.setState({
             trainings: [...this.state.trainings, obj],
            })
          })
    }

    componentDidMount() {
        this.gettingTrainings()
    }

    render() { 
        if(this.state.referrer) {
            return(
                <Redirect to={'/training'} />
            )
        } 
        return(
            <div className="trainings-body">
                <Fade in>
                    <div className="trainings-container">
                <h1 className="trainings-title">Choose whatever you want</h1>
                <div className="trainings-content">
                    {this.state.trainings.map(item => 
                      <div className="train-cards" key={item.id} id={item.id} onClick={this.redirectToTraining}>
                          <div className="card-name" id={item.id}>{item.name}</div>
                          <div className="trains-image" id={item.id}>
                              <img src={item.imgSource} alt="" id={item.id} />
                          </div>
                            <div className="card-description" id={item.id}>{item.description}</div>
                      </div>  
                        )}
                </div>
                </div>
                </Fade>
            </div>
                    )
    }
}

export default Trainings;