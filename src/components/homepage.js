import React from 'react'
import {Link} from 'react-router'
import RecipeList from './recipeList'

export default () => (
    <div className="main-container">
        <div className="my-head">Cappuccino Cat <Link to="/recipes">Data Entry</Link></div>
        <RecipeList />
    </div>
);