import React from 'react';

class Personal extends React.Component {

    state = {}

    puttingUserData = async () => {
        return await fetch(`${this.props.url}/users`, {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({id: this.props.id, firstName: this.state.firstName, lastName: this.state.lastName, birthDate: this.state.birthDate, email: this.state.email, gender: this.state.gender, weight: this.state.weight, height: this.state.height})
        })
    }

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
            this.puttingUserData()
        }
    }

    handleEmailChanges = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleBDChanges = (e) => {
        this.setState({
            birthDate: e.target.value
        })
    }

    handleFirstNameChanges = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChanges = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleHeightNameChanges = (e) => {
        this.setState({
            height: e.target.value
        })
    }

    handleWeightNameChanges = (e) => {
        this.setState({
            wight: e.target.value
        })
    }

    handleGenderChanges = (e) => {
        this.setState({
            gender: e.target.value
        })
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
                    <input type="email" readOnly defaultValue={this.props.data.email}  onChange={this.handleEmailChanges} />
                </div>
                <div>
                    <h2>birth date</h2>
                    <input type="date" readOnly defaultValue={this.props.data.birthDate}  onChange={this.handleBDChanges} />
                </div>
                <div>
                    <h2>first name</h2>
                    <input type="text" readOnly defaultValue={this.props.data.firstName}  onChange={this.handleFirstNameChanges} />
                </div>
                <div>
                    <h2>last name</h2>
                    <input type="text" readOnly defaultValue={this.props.data.lastName} onChange={this.handleLastNameChanges} />
                </div>
                <div>
                    <h2>height</h2>
                    <input type="number" readOnly defaultValue={this.props.data.height}  onChange={this.handleHeightNameChanges} />
                </div>
                <div>
                    <h2>weight</h2>
                    <input type="number" readOnly defaultValue={this.props.data.weight}  onChange={this.handleWeightNameChanges} />
                </div>
                <div>
                    <h2>gender</h2>
                    <input type="text" readOnly defaultValue={this.props.data.gender}  onChange={this.handleGenderChanges} />
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