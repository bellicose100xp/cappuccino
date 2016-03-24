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
        }, 0);

        return (
            <div className="main-container">

                <div className="my-recipe-title">{title}</div>

                <div className="my-recipe-description">{description}</div>

                <div className="hero-list-direction">
                    <div
                        className="hero-image"
                        style={{backgroundImage: `url(${imageUrl})`}}>

                    </div>

                    <div className="list-direction">
                        <div className="ingredients">
                            <div className="panel panel-default">
                                <div className="panel-heading">Ingredients</div>
                                <div className="panel-body">
                                    <ul>
                                        {ingredientsArray.map(item => {
                                            return <li key={item.id}>
                                                {item.name}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="directions">
                            <div className="panel panel-default">
                                <div className="panel-heading">Directions</div>
                                <div className="panel-body" ref={node => directionsDivRef = node}></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
    else {
        return <div></div>
    }
};

export default connect(mapStateToprops)(Content)