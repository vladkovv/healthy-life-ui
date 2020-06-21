import React from 'react';

class Records extends React.Component {

    state = {records: []}

    gettingUserRecords = async () => {
        let response = await fetch(`${this.props.url}/users/${this.props.id}`)
        let data = await response.json()
        data.records.map(item => {
            const obj = {runDate: item.runDate, startTime: item.startTime, endTime: item.endTime, distance: item.distance, id: item.id}
            this.setState({
                records: [...this.state.records, obj]   
               })
        })
    }

    componentDidMount() {
        this.gettingUserRecords()
    }

    render() {
        return(
            <div className='content-records'>
                {this.state.records.map(item => 
                    <div key={item.id} className='profile-record'>
                        <div>
                            <h2>Run date</h2>
                            <input type='date' defaultValue={item.runDate} readOnly />
                        </div>
                        <div>
                            <h2>Start time</h2>
                            <input type='time' defaultValue={item.startTime} readOnly   />
                        </div>
                        <div>
                            <h2>End time</h2>
                            <input type='time' defaultValue={item.endTime} readOnly />
                        </div>
                        <div>
                            <h2>Distance(km)</h2>
                            <input type='number' defaultValue={item.distance} readOnly  />
                        </div>
                    </div>
                )}
            </div>
        )
    }

}

export default Records;