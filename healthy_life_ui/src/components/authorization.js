import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Authorization extends React.Component {
    state = {login: "", password: ""}

    onLoginChange = (event) => {
        this.setState({login: event.target.value})
        console.log(this.state)
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state)
    }

    onAuth = async (e) => {
        e.preventDefault();
        let response = await fetch(`${this.props.url}/auth/signin`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username: this.state.login, password: this.state.password})
        })
        let result = await response.json();
        console.log(result);

    }

    render() {
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control  type="text" placeholder="Введите имя пользователя" onChange={this.onLoginChange} />
          <Form.Text className="text-muted">
            Мы никогда не поделимся ни с кем вашими данными.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" onChange={this.onPasswordChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.onAuth}>
          Submit
        </Button>
      </Form>
    )
}}

export default Authorization;