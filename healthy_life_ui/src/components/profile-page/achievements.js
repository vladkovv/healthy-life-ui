import React from 'react'

class Achievements extends React.Component {

    state = {achieves: []}


    gettingUserAchievments = async () => {
        let response = await fetch(`${this.props.url}/users/${this.props.id}`)
        let data = await response.json() 
        data.achievements.map(item => {
            const obj = {name: item.name, description: item.description, imgSource: item.imageSource, id: item.id}
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
            <div className="content-achievements">
                {
                    this.state.achieves.map(item => 
                        <div key={item.id} className="achieve-card">
                            <h2>{item.name}</h2>
                            <div className='achieve-card-img'>
                                <img alt='' src={item.imgSource} />
                            </div>
                            <div className='achieve-card-description'>{item.description}</div>
                        </div>
                        )

                    
                }
            </div>
        )
    }
}

export default Achievements;