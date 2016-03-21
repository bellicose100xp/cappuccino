import React from 'react'
import {connect} from 'react-redux'
import {addRecipesAction} from '../../actionCreators/firebaseActions'

let InputForm = ({dispatch}) => {
    let recipe = {};

    const handleSubmit = event => {

        const recipeToAdd = ({
            title: recipe.title.value,
            description: recipe.description.value
        });

        event.preventDefault();
        dispatch(addRecipesAction(recipeToAdd));

        recipe.title.value ='';
        recipe.description.value = '';
    };

    return (
        <div className="container form-div">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Recipe Title</label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        className="form-control"
                        ref={node => {recipe.title = node}}
                        placeholder="Enter Recipe Title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Recipe Title</label>
                <textarea
                    name="description"
                    id="description"
                    type="text"
                    className="form-control"
                    ref={node => {recipe.description = node}}
                    placeholder="Enter Recipe Description"
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

export default connect()(InputForm);