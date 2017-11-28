import React, { Component } from 'react';

class Greeter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Mehdi!"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.msg} {this.state.username}</h1>
                <p>{this.props.des}</p>
                <button onClick={() => this.setState({username: "Hasan! "})}>Change</button>
                <button onClick={() => this.setState({username: "Mehdi Hasan! "})}>Change Again</button>
            </div>
        )
    }
}

export default Greeter;