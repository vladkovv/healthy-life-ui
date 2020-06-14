import React from 'react';

class Personal extends React.Component {

    state = {}

    handleButtonCLick = (e) => {
        let inputList = document.querySelectorAll('.personal-data > div > input');
        if(e.target.classList.contains('change-info-button')) {
            e.target.classList.remove('change-info-button')
            e.target.classList.add('save-info-button')
            inputList.forEach(item => item.removeAttribute('readOnly'))
        } else {
            e.target.classList.remove('save-info-button')
            e.target.classList.add('change-info-button')
            inputList.forEach(item => item.setAttribute('readOnly', 'readOnly'))
        }
    }

    render() {
        return(
            <div className="content-personal">
            <div className="avatar">
                <img alt="" src={this.props.data.imgSource} />
                <div>{this.props.data.username}</div>
            </div>
            <div className="personal-data">
                <div>
                    <h2>email</h2>
                    <input type="email" readOnly defaultValue={this.props.data.email}/>
                </div>
                <div>
                    <h2>birth date</h2>
                    <input type="date" readOnly defaultValue={this.props.data.birthDate} />
                </div>
                <div>
                    <h2>first name</h2>
                    <input type="text" readOnly defaultValue={this.props.data.firstName} />
                </div>
                <div>
                    <h2>last name</h2>
                    <input type="text" readOnly defaultValue={this.props.data.lastName}/>
                </div>
                <div>
                    <h2>height</h2>
                    <input type="number" readOnly defaultValue={this.props.data.height} />
                </div>
                <div>
                    <h2>weight</h2>
                    <input type="number" readOnly defaultValue={this.props.data.weight} />
                </div>
                <div>
                    <h2>gender</h2>
                    <input type="text" readOnly defaultValue={this.props.data.gender} />
                </div>
                <div>
                <button className="change-info-button" onClick={this.handleButtonCLick}>Change</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Personal;