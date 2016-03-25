import React from 'react'
import {connect} from 'react-redux'
import {addRecipeInfoAction} from '../../../actionCreators/firebaseActions'
import {INGREDIENTS} from '../../../constants/constants'
import notie from 'notie'

let IngredientInputForm = ({id, dispatch}) => {
    //console.log('ingredient', id);
    let ingredient = {};
    let validationStatus = false;
    const pathInfo = {
        id,
        name: INGREDIENTS
    };
    
    const handleValidation = () => {
        if(!ingredient.name.value) {
            notie.alert(3, 'Ingredient name is empty!!', 2.5);
            return
        }
        
        validationStatus = true;
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleValidation();
        const ingredientToAdd = ({
            name: ingredient.name.value
        });
        if(validationStatus) {
            dispatch(addRecipeInfoAction(ingredientToAdd, pathInfo));
            validationStatus = false;
            ingredient.name.value = '';
        }
    };

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
