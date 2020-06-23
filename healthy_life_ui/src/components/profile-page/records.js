import React from 'react';
import { Fade } from '@material-ui/core';

class Records extends React.Component {

    state = {records: [],  newRecordForm: false, runDate: '', startTime: '', endTime: '', distance: ''}

    gettingUserRecords = async () => {
        let response = await fetch(`${this.props.url}/users/${this.props.id}/records`)
        let data = await response.json()
        data.map(item => {
            const obj = {runDate: item.runDate, startTime: item.startTime, endTime: item.endTime, distance: item.distance, id: item.id}
            this.setState({
                records: [...this.state.records, obj]   
               })
        })
    }

    postRecord = async () => {
        let id = localStorage.getItem('id')
        let response = await fetch(`${this.props.url}/records`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({runDate: this.state.runDate, startTime: this.state.startTime, endTime: this.state.endTime, distance: this.state.distance, user: {id: id}})
        })
        let data = await response.json()
        console.log(data)
        this.setState({newRecordForm: false})
        const obj = {id: data.id, runDate: this.state.runDate, startTime: this.state.startTime, endTime: this.state.endTime, distance: this.state.distance, user: {id: id}}
        this.setState({
            records: [...this.state.records, obj] 
           })
           console.log(obj)
    }

    runDateChange = (e) => {
        this.setState({runDate: e.target.value})
    }

    startTimeChange = (e) => {
        this.setState({startTime: e.target.value})
    }

    endTimeChange = (e) => {
        this.setState({endTime: e.target.value})
    }

    distanceChange = (e) => {
        this.setState({distance: e.target.value})
    }

    addRecordClick = () => {
      this.setState({newRecordForm: true})            
    }

    cancelRecordClick = () => {
        this.setState({newRecordForm: false})
    }

    saveRecordClick = () => {
        this.setState({newRecord: {runDate: this.state.runDate, startTime: this.state.startTime, endTime: this.state.endTime, distance: this.state.distance}})
        this.postRecord()
    }

    componentDidMount() {
        this.gettingUserRecords()
    }

    render() {
        return(
            <Fade in>
            <div className='content-records'>
            {this.state.newRecordForm ||
                <button className='add-record-button' onClick={this.addRecordClick}>Add record</button>
            }
                {this.state.newRecordForm &&
                <div className='new-record'>
                <div className='profile-record'>
                        <div>
                            <h2>Run date</h2>
                            <input type='date' onBlur={this.runDateChange} />
                        </div>
                        <div>
                            <h2>Start time</h2>
                            <input type='time' onBlur={this.startTimeChange} />
                        </div>
                        <div>
                            <h2>End time</h2>
                            <input type='time' onBlur={this.endTimeChange} />
                        </div>
                        <div>
                            <h2>Distance(km)</h2>
                            <input type='number' onBlur={this.distanceChange} />
                        </div>
                     </div>
                     <div className='record-buttons'>
                        <button className='cancel-record-button' onClick={this.cancelRecordClick}>Cancel</button>
                     <button className='save-record-button' onClick={this.saveRecordClick}>Save</button>
                     </div>
                     </div>
                     }
                        

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
            </Fade>
        )
    }

}

export default Records;