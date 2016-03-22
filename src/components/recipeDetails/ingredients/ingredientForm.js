import React from 'react'
import {connect} from 'react-redux'
import {addRecipeInfoAction} from '../../../actionCreators/firebaseActions'
import {INGREDIENTS} from '../../../constants/constants'

let IngredientInputForm = ({id, dispatch}) => {
    //console.log('ingredient', id);
    let ingredient = {};
    const pathInfo = {
        id,
        name: INGREDIENTS
    };

    const handleSubmit = event => {
        event.preventDefault();

        const ingredientToAdd = ({
            name: ingredient.name.value
        });

       dispatch(addRecipeInfoAction(ingredientToAdd, pathInfo));

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

export default connect()(IngredientInputForm);
