import React, { Component } from 'react';

class MsImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <img 
                    src={this.props.url} alt="img" 
                    height={this.props.height} 
                    width={this.props.width} />
            </div>
        )
    }
}

export default MsImage;