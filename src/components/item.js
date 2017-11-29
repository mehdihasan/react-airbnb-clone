import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";
import LikeButton from "./likebutton";

class Item extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const {id, name, picture_url, property_type, price} = this.props.data
        return (
            <div class="ms_item_holder"> 
                <div className="default-padding">
                    <MsImage
                        url={picture_url}
                        width="100%"
                        height="auto" />

                    <div class="ms_item_cat">
                        <MsParagraph
                            text={property_type} />
                    </div>

                    <div class="ms_item_title">
                        <MsParagraph
                            text={name} />
                    </div>

                    <div class="ms_item_price">
                        <MsParagraph
                            text={price + " per person"} />
                    </div>

                    <div className="ms-item-like-container">
                        <LikeButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;