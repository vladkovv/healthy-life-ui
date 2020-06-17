import React from 'react';

class Training extends React.Component {

    state = {imageSource: '', name: '', description: ''}

    gettingTrainInfo = async () => {
        let response =  await fetch(`${this.props.url}/trainings/3`)
        let data =  await response.json()
        this.setState({imageSource: data.imageSource, name: data.name, description: data.description})
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
            </div>
        </div>
        )
    }
}

export default Training;