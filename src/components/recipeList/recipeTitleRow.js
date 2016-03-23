import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {deleteRecipeInfoAction} from '../../actionCreators/firebaseActions'
import {editRecipe} from '../../actionCreators/actionCreators'

const RecipeTitleRow = ({recipe, dispatch}) => {
    let {id, title, description} = recipe;
    let handleDelete = event => {
        event.preventDefault();
        dispatch(deleteRecipeInfoAction(id));
    };
    
    let handleEdit = event => {
        event.preventDefault();
        dispatch(editRecipe(recipe));
    };

  return (
      <tr>
          <td>
            <Link to={`/recipes/${id}`}>{title}</Link>
          </td>
          <td>
              {description}
          </td>
          <td>
              <button
                  className="btn btn-info"
                  onClick={handleEdit}> Edit
              </button>
          </td>
          <td>
              <button
                  className="btn btn-danger"
                  onClick={handleDelete}> Delete
              </button>
          </td>
      </tr>
  )  
};

export default connect()(RecipeTitleRow);