import React from 'react'
import {connect} from 'react-redux'

let InputForm = () => {
    let recipeTitle;
    let recipeDescription;

    return (
        <div className="container form-div">
        <form>
            <div className="form-group">
                <label htmlFor="recipeTitle">Recipe Title</label>
                <input
                    name="recipeTitle"
                    id="recipeTitle"
                    type="text"
                    className="form-control"
                    ref={node => {recipeTitle = node}}
                    placeholder="Enter Recipe Title"
                />
            </div>

            <div className="form-group">
                <label htmlFor="recipeTitle">Recipe Title</label>
                <textarea
                    name="recipeDescription"
                    id="recipeDescription"
                    type="text"
                    className="form-control"
                    ref={node => {recipeDescription = node}}
                    placeholder="Enter Recipe Description"
                />
            </div>

            <button type="submit">Submit</button>

        </form>
    </div>
    )
};

export default connect()(InputForm);