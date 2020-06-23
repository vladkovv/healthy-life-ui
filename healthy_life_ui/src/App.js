import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Users from './components/users';
import Authorization from './components/authorization';
import Trainings from './components/main';
import Profile from './components/profile-page/profile';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Registration from './components/registration';
import Training from './components/training/training';

const URL =  'https://healthy-life-kotlin.herokuapp.com/api/v1';

class App extends React.Component {

  state = {currId: '', token: ''}

  handleAuth = (id, token) => {
    this.setState({currId: id})
    this.setState({token: token})
    localStorage.setItem("token", token)
    localStorage.setItem("id", id)
  }

  handleLogOut = () => {
    this.setState({currId: ''})
    this.setState({token: ''})
    localStorage.clear()
  }


  componentDidMount() {
    if(localStorage.token) {
      this.setState({token: localStorage.getItem("token")});
      this.setState({currId: localStorage.getItem("id")});
    }
  }

  render() {
  return (
    <BrowserRouter>
    <div>
    <Header  status={this.state.token} logOut={this.handleLogOut} />
    <div className="app-content">
    <Route exact path='/' render={(props) => <Trainings url={URL} status={this.state.token}   {...props}/>}/>
    <Route path='/auth' render={(props) => <Authorization url={URL} onAuth={this.handleAuth} status={this.state.token}  {...props}/>}/>
    <Route path='/reg' render={(props) => <Registration url={URL} status={this.state.token}  {...props}/>}/>
    <Route path='/profile' render={(props) => <Profile url={URL} status={this.state.token} id={this.state.currId} {...props}/>} />
    <Route path='/users' render={(props) => <Users url={URL} status={this.state.token}  {...props}/>}/>
    <Route path='/training' render={(props) => <Training url={URL} status={this.state.token}   {...props}/>}/>

    
    </div> 
    </div>
    </BrowserRouter>
  );
}}

export default App;
