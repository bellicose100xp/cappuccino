import React from 'react'
import {connect} from 'react-redux'
import RecipeTitleRow from './recipeTitleRow'
import classNames from 'classnames'

let mapStateToProps = state => {
    return {
        allRecipeTitles: state.recipes
    }
};

const RecipeTitle = ({allRecipeTitles}) => {
   // console.log(window.innerWidth)
    let tableClass = classNames({
        'table': true,
        'table-striped': true,
        'table-responsive': true,
        'table-hover': true,
        'table-condensed': window.innerWidth < 600
    });
    

    return (
        <div className="form-div">
            <table
                className={tableClass}
                style={{marginTop: '10px'}}
            >
                <thead>
                    <tr style={{borderTop: '1px solid lightgrey'}}>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
               </thead>
                <tbody>
                {allRecipeTitles.map(recipe => (
                    <RecipeTitleRow
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}
                </tbody>
            </table>
        </div> 
    )
};

export default connect(mapStateToProps)(RecipeTitle);
