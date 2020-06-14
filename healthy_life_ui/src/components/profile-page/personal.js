import React from 'react';

class Personal extends React.Component {

    state = {}

    render() {
        return(
            <div className="content-personal">
            <div className="avatar">
                <img src={this.props.data.imgSource} />
                <div>{this.props.data.username}</div>
            </div>
            <div className="personal-data">
                <div>
                    <h2>email</h2>
                    <input type="email" />
                </div>
                <div>
                    <h2>birth date</h2>
                    <input type="date" />
                </div>
                <div>
                    <h2>first name</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>last name</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>height</h2>
                    <input type="number" />
                </div>
                <div>
                    <h2>weight</h2>
                    <input type="number" />
                </div>
                <div>
                    <h2>gender</h2>
                    <input type="number" />
                </div>
            </div>
            </div>
        )
    }
}

export default Personal;