import React from 'react'
import {connect} from 'react-redux'
import IngredientTitleRow from './ingredientTitleRow'

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

const IngredientsTitles = ({allIngredients}) => {

    return (
        <div className="container">
            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th>Ingredient Name</th>
                </tr>
                </thead>
                <tbody>
                {allIngredients.map(ingredient => (
                    <IngredientTitleRow
                        key={ingredient.id}
                        {...ingredient}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default connect(mapStateToProps)(IngredientsTitles);
