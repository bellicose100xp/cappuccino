import React from 'react'
import {connect} from 'react-redux'
import convertToArray from '../utils/convertToArray'
import paraToList from '../utils/convertParaToOrderedList'

const mapStateToprops = (state, ownProps) => {
    return {
        recipe: state.recipes.filter(item => item.id === ownProps.params.recipeId)[0]
    }
};

const Content = ({recipe}) => {
    // if block is so we eliminate the error in case the receipe hasn't loaded
    if (recipe) {
        let directionsDivRef;
        const {title, description, directions, imageUrl, ingredients} = recipe;
        let ingredientsArray = convertToArray(ingredients);
      //  console.log('content..', directions);
        setTimeout(() => {
            directionsDivRef.innerHTML = paraToList(directions || '')
        },0);

        return (
            <div className="container-fluid">

                <h1 className="row">{title}</h1>

                <p className="row">{description}</p>

                <ul>
                    {ingredientsArray.map(item => {
                        return <li key={item.id}>
                                {item.name}
                        </li>
                    })}
                </ul>
                <img src={imageUrl} style={{width:320, height:240}}/>
                <div className="row" ref={node => directionsDivRef = node}> </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
};

export default connect(mapStateToprops)(Content)