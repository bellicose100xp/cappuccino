/**
 * Created by HSO on 3/21/16.
 */
import React from 'react'
import {connect} from 'react-redux'

import IngredientForm from './ingredients/ingredientForm'
import IngredientTitle from './ingredients/IngredientTitle'
import Directions from './directions/directions'

import {getChildItems} from '../../actionCreators/firebaseActions'
import {INGREDIENTS} from '../../constants/constants'

function mapStateToProps(state, ownProps) {
    let currentDirections = '';

    state.recipes.filter(recipe => {
        if (ownProps.params.recipeId === recipe.id) {
            if (recipe.hasOwnProperty('directions')) currentDirections = recipe.directions;
        }
    });

    return {
        directions: currentDirections,
        id: ownProps.params.recipeId
    };
}

class RecipeInputAndTitle extends React.Component {
    componentDidMount = () => {

        let {id, dispatch} = this.props;

        let pathInfo = {
            id,
            name: INGREDIENTS
        };

        dispatch(getChildItems(pathInfo));
    };

    render = () => {

        let {id, directions} = this.props;
        
        let pathInfo = {
            id,
            name: INGREDIENTS
        };

        return (
            <div>
                <IngredientForm id={id}/>
                <IngredientTitle id={id}/>
                <Directions id={id} directions={directions}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(RecipeInputAndTitle);