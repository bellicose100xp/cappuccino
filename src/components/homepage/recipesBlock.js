import React from 'react'
import {connect} from 'react-redux'

const RecipeBlock = ({foodItemContainerStyle, title}) => {

    let image_name = title.replace(' ', '_');

    let calculatedStyle = Object.assign({}, foodItemContainerStyle,{
        backgroundImage: `url(./images/${image_name}.jpg)`
    });

    return (
        <div
            className="food-item-container"
            style={calculatedStyle}>
            <div className="food-item">{title}</div>
        </div>
    )
};

export default connect()(RecipeBlock);
