import React from 'react'
import {connect} from 'react-redux'

let InputForm = () => {
    let recipeTitle;
    
    return (
        <form>
            <div className="form-group">
                <label htmlFor="recipeTitle">Recipe Title</label>
                <input
                    name="recipeTitle"
                    id="recipeTitle"
                    className="form-control"
                    ref={node => {recipeTitle = node}}
                    placeholder="Enter Recipe Title"
                />
            </div>
        </form>
    )
};

export default connect()(InputForm);