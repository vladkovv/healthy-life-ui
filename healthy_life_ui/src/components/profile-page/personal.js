import React from 'react';

class Personal extends React.Component {

   state = {}


    gettingUserData = async () => {
        let id = 0;

        if (this.state.id) {
            id = this.state.id
        } else {
            id = localStorage.getItem('id')
        }

        const response = await fetch(`${this.props.url}/users/${id}`)
        const data = await response.json();
        this.setState({id: data.id, username: data.username, firstName: data.firstName, lastName: data.lastName, height: data.height, weight: data.weight, gender: data.gender, birthDate: data.birthDate, email: data.email, imgSource: data.imageSource});
    }

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
            e.target.innerText = 'Save';
        } else {
            e.target.classList.remove('save-info-button')
            e.target.classList.add('change-info-button')
            inputList.forEach(item => item.setAttribute('readOnly', 'readOnly'))
            e.target.innerText = 'Change';
            this.puttingUserData()
        }
    }

    handleEmailChanges = (e) => {
            console.log(this.state)
        this.setState({
            email: e.target.value
        })
    }

    handleBDChanges = (e) => {
        console.log(this.state)
        this.setState({
            birthDate: e.target.value
        })
    }

    handleFirstNameChanges = (e) => {
        this.setState({
            firstName: e.target.value
        })
        console.log(this.state)
    }
    

    handleLastNameChanges = (e) => {
        console.log(this.state)
        this.setState({
            lastName: e.target.value
        })
    }

    handleHeightNameChanges = (e) => {
        console.log(this.state)
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

    componentDidMount() {
        this.gettingUserData()
    }

    render() {
        return(
            <div className="content-personal">
            <div className="avatar">
                <img alt="" src={this.state.imgSource} />
                <div>{this.state.username}</div>
            </div>
            <div className="personal-data">
                <div>
                    <h2>email</h2>
                    <input type="email" readOnly defaultValue={this.state.email}  onBlur={this.handleEmailChanges} />
                </div>
                <div>
                    <h2>birth date</h2>
                    <input type="date" readOnly defaultValue={this.state.birthDate}  onBlur={this.handleBDChanges} />
                </div>
                <div>
                    <h2>first name</h2>
                    <input type="text" readOnly defaultValue={this.state.firstName}  onChange={this.handleFirstNameChanges} />
                </div>
                <div>
                    <h2>last name</h2>
                    <input type="text" readOnly defaultValue={this.state.lastName} onBlur={this.handleLastNameChanges} />
                </div>
                <div>
                    <h2>height</h2>
                    <input type="number" readOnly defaultValue={this.state.height}  onBlur={this.handleHeightNameChanges} />
                </div>
                <div>
                    <h2>weight</h2>
                    <input type="number" readOnly defaultValue={this.state.weight}  onBlur={this.handleWeightNameChanges} />
                </div>
                <div>
                    <h2>gender</h2>
                    <input type="text" readOnly defaultValue={this.state.gender}  onBlur={this.handleGenderChanges} />
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