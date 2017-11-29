import React, { Component } from 'react';
import Title from "./title";
import Item from "./item";

class Section extends Component {
    
    constructor(props) {
        super(props)
    }

    handleSecCategoryClick = (propertyType) => {
        this.props.onCatClick(propertyType)
    }

    handleSecFavClick = (itemId, item, section) => {
        this.props.onFavClick(itemId, item, this.props.data)
    }

    render() {
        const {id, title, listings} = this.props.data
        if (listings.length > 0) {
            return (
                <div className="ms-section-holder">
                    <div className="ms-section-title default-padding">
                        <Title
                            text={title}  />
                    </div>
                    <div className="ms-items-container flex-container space-between">
                        {listings.map((product) =>
                            <Item
                                id={product.id}
                                data={product}
                                onSecCatClick={this.handleSecCategoryClick}
                                onSecFavClick={this.handleSecFavClick}
                            />
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ms-section-holder"></div>
            )
        }
        
    }
}

export default Section;