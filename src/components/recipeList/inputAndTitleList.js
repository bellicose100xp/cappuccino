/**
 * Created by admin on 3/20/2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import InputForm from './inputForm'
import RecipeTitle from './recipeTitle'

let RecipeInputAndTitle = () => (
    <div className="main-container">
        <InputForm />
        <RecipeTitle />
    </div>
);

export default connect()(RecipeInputAndTitle);