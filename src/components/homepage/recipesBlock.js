import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const RecipeBlock = ({foodItemContainerStyle, title, imageUrl, id}) => {

    // let image_name = title.replace(' ', '_');

    let calculatedStyle = Object.assign({}, foodItemContainerStyle, {
        backgroundImage: `url(${imageUrl})`
    });

    return (
        <Link className="link-no-underline" to={`/${id}`}>
            <div
                className="food-item-container"
                style={calculatedStyle}>
                <div className="food-item">{title}</div>
            </div>
        </Link>
    )
};

export default connect()(RecipeBlock);
