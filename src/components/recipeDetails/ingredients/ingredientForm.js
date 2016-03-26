import React from 'react'
import {connect} from 'react-redux'
import {addRecipeInfoAction} from '../../../actionCreators/firebaseActions'
import {INGREDIENTS} from '../../../constants/constants'
import notie from '../../../lib/notie'

let IngredientInputForm = ({id, dispatch}) => {
    //console.log('ingredient', id);
    let ingredient = {};
    const pathInfo = {
        id,
        name: INGREDIENTS
    };

    const handleValidation = () => {
        if (!ingredient.name.value) {
            notie.alert(3, 'Ingredient name is empty!!', 2.5);
            return false
        }
        return true
    };


    async function handleSubmit(event) {
        event.preventDefault();

        if (!handleValidation()) return;

        const ingredientToAdd = ({name: ingredient.name.value});
        dispatch(addRecipeInfoAction(ingredientToAdd, pathInfo));
        ingredient.name.value = '';
        notie.alert(1, 'Success!', 1.5);
    }

    return (
        <div className="form-div">
            <form>
                <div className="form-group">
                    <label htmlFor="ingredient">Ingredient Name</label>
                    <input
                        name="ingredient"
                        id="ingredient"
                        type="text"
                        className="form-control"
                        ref={node => {ingredient.name = node}}
                        placeholder="Enter Ingredient Name"
                    />
                </div>

                <button
                    className="btn btn-primary margin-bottom-button"
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
