import React from 'react'
import {connect} from 'react-redux'
import IngredientTitleRow from './ingredientTitleRow'
import {INGREDIENTS} from '../../../constants/constants'

let mapStateToProps = (state, ownProps) => {
    let allIngredients = [];

    //this check is to make sure if a key or property doesn't exist
    //javascript doesn't throw error
    if (state.childItems.hasOwnProperty('ingredients')) {
        if (state.childItems.ingredients.hasOwnProperty(ownProps.id))
            allIngredients = state.childItems.ingredients[ownProps.id]
    }

    // if(state.childItems.ingredients[ownProps.id]) {
    //     allIngredients = state.childItems.ingredients[ownProps.id];
    // }

    return {
        allIngredients,
        id: ownProps.id
    }
};

const IngredientsTitles = ({id, allIngredients}) => {
    let pathInfo = {
        id,
        name: INGREDIENTS
    };

    return (
        <div className="form-div">
            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th>Ingredient Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {allIngredients.map(ingredient => (
                    <IngredientTitleRow
                        key={ingredient.id}
                        {...ingredient}
                        pathInfo={pathInfo}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default connect(mapStateToProps)(IngredientsTitles);
