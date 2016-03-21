import React from 'react'
import {connect} from 'react-redux'
import {} from '../../actionCreators/firebaseActions'

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.params.recipeId
    }
}

let IngredientInputForm = ({id, filter, dispatch}) => {
    console.log('ingredient', id);
    let ingredient = {};

    const handleSubmit = event => {
        event.preventDefault();

        const recipeToAdd = ({
            name: ingredient.name.value
        });

      //  dispatch(addRecipesAction(recipeToAdd));

        ingredient.name.value = '';
    };

    return (
        <div className="container form-div">
            <form>
                <div className="form-group">
                    <label htmlFor="ingredient">Recipe Title</label>
                    <input
                        name="ingredient"
                        id="ingredient"
                        type="text"
                        className="form-control"
                        ref={node => {ingredient.name = node}}
                        placeholder="Enter Ingredient"
                    />
                </div>

                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>

            </form>
        </div>
    )
};

export default connect(mapStateToProps)(IngredientInputForm);
