import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Pagination, { usePagination } from '@material-ui/lab/Pagination';
import { Fade } from '@material-ui/core';

class Users extends React.Component{
    
    state = {
        users: [],
        currPage: 1,
        countPages: 0
    }

    gettingData = async () => {
        const response = await fetch(`${this.props.url}/users?size=5&page=${this.state.currPage}`);
        const data =  await response.json();

        if(!this.state.countPages) {
          this.setState({
            countPages: Math.ceil(data.userCount/5)
          })
        }

        data.usersFromPagination.map(item => {
          const obj = {id: item.id, firstName: item.firstName, lastName: item.lastName, username: item.username, email: item.email}
          this.setState({
           users: [...this.state.users, obj],
          })
        })
      }

      deleteUser = async (e) => {
        const removeUserId = Number(e.target.id);
        const newState = this.state.users.filter((user) => user.id !== removeUserId);
        this.setState({
          users: newState
        })
        // return await fetch(`${this.props.url}/users/${removeUserId}`, {
        //   method: 'DELETE'
        // })
      }

      handlePagehanged = async (page) => {
        this.setState({
          currPage: page,
          users: []
        }, () => {
          this.gettingData()
        })
      }


    componentDidMount() {
        this.gettingData()  

    }

render() {
  
  if(!this.props.status) {
    return <Redirect to={'/auth'} />
  }

return(
<div className="users-body">
  <Fade in>
<div>
    {
        <table className="users-table">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map(item => 
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.username}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td className="users-button">
          <CreateIcon id={item.id} className="users-icon" />
          </td>
          <td id={item.id} className="users-button" onClick={this.deleteUser}>
          <HighlightOffIcon id={item.id} className="users-icon" />
          </td>
        </tr>
  )}
          </tbody>
        </table>
    }
</div>
</Fade>
    <Pagination count={this.state.countPages} onChange={(event, page) => this.handlePagehanged(page.toString())} className="pagination"/>
</div>
);
}}

export default Users;