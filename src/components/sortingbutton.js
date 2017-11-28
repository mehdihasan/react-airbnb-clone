import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";

class SortingButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="ms_menu_holder">
                
                <div class="ms_menu_img">
                    <MsImage
                        url="https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"
                        height="72"
                        width="96" />
                </div>

                <div class="ms_menu_text">
                    <MsParagraph
                        text="HOMES" />
                </div>
                
            </div>
        )
    }
}

export default SortingButton;