import React from 'react';
import Button from 'react-bootstrap/Button';

class Users extends React.Component{
    
    state = {
        users: []
    }

    gettingData = async () => {
        const response = await fetch(`${this.props.url}/users`);
        const data =  await response.json();
        
        data.map(item => {
          const obj = {id: item.id, firstName: item.firstName, lastName: item.lastName, username: item.username, height: item.height, weight: item.weight}
          this.setState({
           users: [...this.state.users, obj]
          })
        })
      }

      deleteUser = async (e) => {
        const removeUserId = Number(e.target.id);
        const newState = this.state.users.filter((user) => user.id !== removeUserId);
        this.setState({
          users: newState
        })
    
        // return await fetch(`${USERS_URL}/${removeUserId}`, {
        //   method: 'DELETE'
        // })
      }

    componentDidMount() {
        this.gettingData()   
    }
render() {
return(
<div>
    <h2>Список пользователей</h2>
<div>
    {
        this.state.users.map(item => <div key={item.id} className='list'>
         <div className="elem">id: {item.id}</div> 
         <div className="elem">Имя пользователя: {item.username}</div> 
         <div className="elem">Имя: {item.firstName}</div> 
         <div className="elem">Фамилия: {item.lastName}</div>   
         <div className="elem">Рост: {item.height}см</div> 
         <div className="elem">Вес: {item.weight}кг</div> 
         <Button variant="outline-success" className ='update-button'>Изменить</Button>
         <Button variant="outline-danger" className ='delete-button' id={item.id} onClick={this.deleteUser}>Удалить</Button>
        </div>
        )
    }
</div>
</div>
);
}}

export default Users;