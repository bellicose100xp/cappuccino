import React from 'react'
import {connect} from 'react-redux'
import RecipeTitleRow from './recipeTitleRow'

let mapStateToProps = state => {
    return {
        allRecipeTitles: state.recipes
    }
};

const RecipeTitle = ({allRecipeTitles}) => {
    console.log(allRecipeTitles);
    return (
        <div className="container">
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
               </thead>
                <tbody>
                {allRecipeTitles.map(recipe => (
                    <RecipeTitleRow
                        key={recipe.key}
                        {...recipe}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default connect(mapStateToProps)(RecipeTitle);