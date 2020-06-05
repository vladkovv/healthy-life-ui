import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Users from './components/users';
import Authorization from './components/authorization';
import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';

const USERS_URL =  'http://healthy-life-kotlin.herokuapp.com/api/v1/users';

class App extends React.Component {

  state = {
    users: []
  }

  gettingData = async () => {
    const response = await fetch(USERS_URL);
    const data =  await response.json();
    
    data.map(item => {
      const obj = {id: item.id, firstName: item.firstName, lastName: item.lastName, username: item.username, height: item.height, weight: item.weight}
      this.setState({
       users: [...this.state.users, obj]
      })
    })
    console.log(this.state)
  }

  deleteUser = async (e) => {
    const removeUserId = Number(e.target.id);
    const newState = this.state.users.filter((user) => user.id !== removeUserId);
    this.setState({
      users: newState
    })
    console.log(this.state);

    // return await fetch(`${USERS_URL}/${removeUserId}`, {
    //   method: 'DELETE'
    // })
  }

  render() {
  return (
    <BrowserRouter>
    <div>
    <Header />
    <div className="app-content">
    <Route exact path='/' component={Main}/>
    <Route path='/auth' component={Authorization}/>
  <Route path='/users' render={(props) => <Users getUsers = {this.gettingData} onDelete = {this.deleteUser} users = {this.state.users}  {...props}/>}/>
    {/* <Main />
    <Authorization />
    <Users getUsers = {this.gettingData} onDelete = {this.deleteUser} users = {this.state.users} /> */}
    </div> 
    </div>
    </BrowserRouter>
  );
}}

export default App;