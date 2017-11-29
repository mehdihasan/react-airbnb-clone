import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";
import LikeButton from "./likebutton";

class Item extends Component {

    handleItemClick = (url) => (
        window.open(this.props.data.listing_url, '_blank')
    );

    handleItemCatClick = () => (
        this.props.onSecCatClick(this.props.data.property_type)
    );

    handleItemFavClick = (isFav) => {
        this.props.data.isFav = isFav
        this.props.onSecFavClick(this.props.data.id, this.props.data)
    }

    render() {
        const {name, picture_url, property_type, price, isFav} = this.props.data
        return (
            <div className="ms-item-holder"> 
                <div className="default-padding">
                    <MsImage
                        url={picture_url}
                        width="100%"
                        height="auto" />

                    <div className="ms-item-cat" onClick={this.handleItemCatClick}>
                        <MsParagraph
                            text={property_type} />
                    </div>

                    <div className="ms-item-title" onClick={this.handleItemClick}>
                        <MsParagraph
                            text={name} />
                    </div>

                    <div className="ms-item-price">
                        <MsParagraph
                            text={price + " per person"} />
                    </div>

                    <div className="ms-item-like-container">
                        <LikeButton
                            isFav={isFav}
                            onItemFavClick={this.handleItemFavClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;