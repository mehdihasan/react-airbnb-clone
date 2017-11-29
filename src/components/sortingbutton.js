import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";

class SortingButton extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {

        const {title, imageUrl} = this.props.data

        return (
            <div class="ms_menu_holder">
                
                <div class="ms_menu_img">
                    <MsImage
                        url={imageUrl}
                        height="72"
                        width="96" />
                </div>

                <div class="ms_menu_text">
                    <MsParagraph
                        text={title} />
                </div>
                
            </div>
        )
    }
}

export default SortingButton;