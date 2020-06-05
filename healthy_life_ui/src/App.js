import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Users from './components/users';
import Authorization from './components/authorization';
import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';

const URL =  'http://healthy-life-kotlin.herokuapp.com/api/v1';

class App extends React.Component {

  state = {
    users: []
  }

  render() {
  return (
    <BrowserRouter>
    <div>
    <Header />
    <div className="app-content">
    <Route exact path='/' component={Main}/>
    <Route path='/auth' render={(props) => <Authorization url= {URL}  {...props}/>}/>
  <Route path='/users' render={(props) => <Users url= {URL}  {...props}/>}/>
    </div> 
    </div>
    </BrowserRouter>
  );
}}

export default App;
