import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Title;