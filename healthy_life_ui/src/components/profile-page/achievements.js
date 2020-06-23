import React from 'react';
import { Fade } from '@material-ui/core';

class Achievements extends React.Component {

    state = {achieves: []}


    gettingUserAchievments = async () => {
        let id = localStorage.getItem('id')
        let response = await fetch(`${this.props.url}/users/${id}/achievements/score`)
        let data = await response.json() 
        data.map(item => {
            const obj = {name: item.achievement.name, description: item.achievement.description,
                imgSource: item.achievement.imageSource, id: item.achievement.id, measure: item.achievement.measure,
                goal: item.achievement.goal, score: item.score}
            this.setState({
                achieves: [...this.state.achieves, obj]   
               })
        })
    }

    componentDidMount() {
        this.gettingUserAchievments()
    }

    render() {
        return(
            <Fade in>
            <div className="content-achievements">
                {
                    this.state.achieves.map(item => 
                        <div key={item.id} className="achieve-card">
                            <h2>{item.name}</h2>
                            <div className='achieve-card-img'>
                                <img alt='' src={item.imgSource} />
                            </div>
                            <div className='achieve-card-description'>{item.description}</div>
                            <div className='achieve-card-goal'>{item.score} / {item.goal} {item.measure}</div>
                        </div>
                    )

                    
                }
            </div>
            </Fade>
        )
    }
}

export default Achievements;