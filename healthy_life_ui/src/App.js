import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Users from './components/users';
import Authorization from './components/authorization';
import Main from './components/main';
import Profile from './components/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './components/registration';

const URL =  'http://healthy-life-kotlin.herokuapp.com/api/v1';

class App extends React.Component {

  state = {isAuth: false, currId: ''}

  handleAuth = async (id) => {
    this.setState({isAuth: true})
    this.setState({currId: id})
  }

  render() {
  return (
    <BrowserRouter>
    <div>
    <Header status={this.state.isAuth} />
    <div className="app-content">
    <Route exact path='/' component={Main}/>
    <Route path='/auth' render={(props) => <Authorization url={URL} onAuth={this.handleAuth} status={this.state.isAuth}  {...props}/>}/>
    <Route path='/reg' render={(props) => <Registration url={URL} status={this.state.isAuth}  {...props}/>}/>
    <Route path='/profile' render={(props) => <Profile url={URL} status={this.state.isAuth} id={this.state.currId} {...props}/>} />
    <Route path='/users' render={(props) => <Users url={URL} status={this.state.isAuth}  {...props}/>}/>
    
    </div> 
    </div>
    </BrowserRouter>
  );
}}

export default App;
