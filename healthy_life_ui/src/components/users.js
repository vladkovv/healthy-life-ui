import React from 'react';
import Button from 'react-bootstrap/Button';

class Users extends React.Component{
    
    componentDidMount() {
        this.props.getUsers()    
    }
render() {
return(
<div>
    <h2>Список пользователей</h2>
<div>
    {
        this.props.users.map(item => <div key={item.id} className='list'>
         <div className="elem">id: {item.id}</div> 
         <div className="elem">Имя пользователя: {item.username}</div> 
         <div className="elem">Имя: {item.firstName}</div> 
         <div className="elem">Фамилия: {item.lastName}</div>   
         <div className="elem">Рост: {item.height}см</div> 
         <div className="elem">Вес: {item.weight}кг</div> 
         <Button variant="outline-success" className ='update-button'>Изменить</Button>
         <Button variant="outline-danger" className ='delete-button' id={item.id} onClick={this.props.onDelete}>Удалить</Button>
        </div>
        )
    }
</div>
</div>
);
}}

export default Users;