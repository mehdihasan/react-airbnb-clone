import React, { Component } from 'react';
import Title from "./title";
import Item from "./item";

class Section extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const {id, title, listings} = this.props.data
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
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Section;