import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";

class SortingButton extends Component {

    handleClick = () => (
        this.props.onMenuClick(this.props.data.id)
    );

    render() {

        const {title, imageUrl} = this.props.data

        return (
            <div className="ms-menu-holder" onClick={this.handleClick}>
                
                <div className="ms_menu_img">
                    <MsImage
                        url={imageUrl}
                        height="72"
                        width="96" />
                </div>

                <div className="ms_menu_text">
                    <MsParagraph
                        text={title} />
                </div>
                
            </div>
        )
    }
}

export default SortingButton;