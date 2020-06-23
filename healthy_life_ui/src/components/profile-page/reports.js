import React from 'react';
import { NavLink } from 'react-router-dom';

class Reports extends React.Component {

    state = {overallStatitics: {}, chosenStats: [], weeks: false, months: false}

    getOverallStatistics = async() => {
        let id = localStorage.getItem('id')
        let response = await fetch(`${this.props.url}/users/${id}/reports`)
        let data = await response.json()
        this.setState({overallStatitics: data})
        console.log(data)
    }

    getWeekStats = async() => {
        let id = localStorage.getItem('id')
        let response = await fetch(`${this.props.url}/users/${id}/reports/weeks`)
        let data = await response.json()
        this.setState({chosenStats: data})
        console.log(data)
    }

    getMonthStats = async() => {
        let id = localStorage.getItem('id')
        let response = await fetch(`${this.props.url}/users/${id}/reports/months`)
        let data = await response.json()
        this.setState({chosenStats: data})
        console.log(data)
    }


    componentDidMount() {
        this.getOverallStatistics()
    }

    render() {

            return (
                <div className='content-reports'>
                <div>
                    <h2 className="overall-name">Overall statistics</h2>
                    <div className='overall-statistics'>
                       <div className='stat-card'>
                           <h2>average distance</h2>
                           <div>{this.state.overallStatitics.averageDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max distance</h2>
                           <div>{this.state.overallStatitics.maxDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>total distance</h2>
                           <div>{this.state.overallStatitics.totalDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>average time</h2>
                           <div>{this.state.overallStatitics.averageTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max time</h2>
                           <div>{this.state.overallStatitics.maxTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>total time</h2>
                           <div>{this.state.overallStatitics.totalTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>average speed</h2>
                           <div>{this.state.overallStatitics.averageSpeed} km/h</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max speed</h2>
                           <div>{this.state.overallStatitics.maxSpeed} km/h</div>
                       </div>
                    </div>
                    <h1 className='detailed-name'>Detailed statistics</h1>
                    <div className="stats-header">
                        <div>
                       <NavLink to='/profile/reports/weeks' onClick={this.getWeekStats}>Weeks</NavLink>
                       </div>
                       <div>
                       <NavLink to='/profile/reports/months' onClick={this.getMonthStats}>Months</NavLink>
                       </div>
                   </div>
   
                       {this.state.chosenStats.map(item => 
                         <div key={item.start} className="weeks-div">
                          <div className='stats-date'>
                              <div>
                                <h2>From</h2>  
                               <input defaultValue={item.start} type='date' />
                               </div>
                               <div>
                                 <h2>To</h2>  
                                <input defaultValue={item.end} type='date'/>
                                </div>
                           </div>
                           <div className='week-stats'>
                               <div className='stat-card'>
                           <h2>average distance</h2>
                           <div>{item.averageDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max distance</h2>
                           <div>{item.maxDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>total distance</h2>
                           <div>{item.totalDistance} km</div>
                       </div>
                       <div className='stat-card'>
                           <h2>average time</h2>
                           <div>{item.averageTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max time</h2>
                           <div>{item.maxTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>total time</h2>
                           <div>{item.totalTime}</div>
                       </div>
                       <div className='stat-card'>
                           <h2>average speed</h2>
                           <div>{item.averageSpeed} km/h</div>
                       </div>
                       <div className='stat-card'>
                           <h2>max speed</h2>
                           <div>{item.maxSpeed} km/h</div>
                       </div>
                           </div>
                           </div>
                      )}
                      </div>
                    </div>   
           )  
            
        
    
        // if(this.state.months) {
        //     return (
        //         <div className='content-reports'>
        //         <div>
        //             <h2 className="overall-name">Overall statistics</h2>
        //             <div className='overall-statistics'>
        //                <div className='stat-card'>
        //                    <h2>average distance</h2>
        //                    <div>{this.state.overallStatitics.averageDistance} km</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>max distance</h2>
        //                    <div>{this.state.overallStatitics.maxDistance} km</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>total distance</h2>
        //                    <div>{this.state.overallStatitics.totalDistance} km</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>average time</h2>
        //                    <div>{this.state.overallStatitics.averageTime}</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>max time</h2>
        //                    <div>{this.state.overallStatitics.maxTime}</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>total time</h2>
        //                    <div>{this.state.overallStatitics.totalTime}</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>average speed</h2>
        //                    <div>{this.state.overallStatitics.averageSpeed} km/h</div>
        //                </div>
        //                <div className='stat-card'>
        //                    <h2>max speed</h2>
        //                    <div>{this.state.overallStatitics.maxSpeed} km/h</div>
        //                </div>
        //             </div>
        //             <h1 className='detailed-name'>Detailed statistics</h1>
        //             <div className="stats-header">
        //                 <div>
        //                <NavLink to='/profile/reports/weeks' onClick={this.onWeeksClick}>Weeks</NavLink>
        //                </div>
        //                <div>
        //                <NavLink to='/profile/reports/months' onClick={this.onMonthsClick}>Months</NavLink>
        //                </div>
        //            </div>
   
        //            {this.state.monthsStats.map(item => 
        //                <div className='month-div'>
        //                <div className='stats-date'>
        //                    <div>
        //                      <h2>From</h2>  
        //                     <input defaultValue={item.start} type='date' />
        //                     </div>
        //                     <div>
        //                       <h2>To</h2>  
        //                      <input defaultValue={item.end} type='date'/>
        //                      </div>
        //                 </div>
        //                 <div className='week-stats'>
        //                     <div className='stat-card'>
        //                 <h2>average distance</h2>
        //                 <div>{item.averageDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max distance</h2>
        //                 <div>{item.maxDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>total distance</h2>
        //                 <div>{item.totalDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>average time</h2>
        //                 <div>{item.averageTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max time</h2>
        //                 <div>{item.maxTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>total time</h2>
        //                 <div>{item.totalTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>average speed</h2>
        //                 <div>{item.averageSpeed} km/h</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max speed</h2>
        //                 <div>{item.maxSpeed} km/h</div>
        //             </div>
        //                 </div>
        //                 </div>
        //                 )}
        //               </div>
        //             </div>   
        //    )  
            
        // }
        // return(
        //     <div className='content-reports'>
        //      <div>
        //          <h2 className="overall-name">Overall statistics</h2>
        //          <div className='overall-statistics'>
        //             <div className='stat-card'>
        //                 <h2>average distance</h2>
        //                 <div>{this.state.overallStatitics.averageDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max distance</h2>
        //                 <div>{this.state.overallStatitics.maxDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>total distance</h2>
        //                 <div>{this.state.overallStatitics.totalDistance} km</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>average time</h2>
        //                 <div>{this.state.overallStatitics.averageTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max time</h2>
        //                 <div>{this.state.overallStatitics.maxTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>total time</h2>
        //                 <div>{this.state.overallStatitics.totalTime}</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>average speed</h2>
        //                 <div>{this.state.overallStatitics.averageSpeed} km/h</div>
        //             </div>
        //             <div className='stat-card'>
        //                 <h2>max speed</h2>
        //                 <div>{this.state.overallStatitics.maxSpeed} km/h</div>
        //             </div>
        //          </div>
        //          <h1 className='detailed-name'>Detailed statistics</h1>
        //          <div className="stats-header">
        //              <div>
        //             <NavLink to='/profile/reports/weeks' onClick={this.onWeeksClick}>Weeks</NavLink>
        //             </div>
        //             <div>
        //             <NavLink to='/profile/reports/months' onClick={this.onMonthsClick}>Months</NavLink>
        //             </div>
        //         </div>
        //                 </div>
        //          </div>   
        // )
}
}

export default Reports;