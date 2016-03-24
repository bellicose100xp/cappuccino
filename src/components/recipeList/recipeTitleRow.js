import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {deleteRecipeInfoAction} from '../../actionCreators/firebaseActions'
import {editRecipe} from '../../actionCreators/actionCreators'
import classNames from 'classnames'

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

    let btnClassInfo = classNames({
        'btn': true,
        'btn-info': true,
        'btn-sm': window.innerWidth < 600
    });

    let btnClassDanger = classNames({
        'btn': true,
        'btn-danger': true,
        'btn-sm': window.innerWidth < 600
    });

  return (
      <tr>
          <td>
            <Link to={`/recipes/${id}`}>{title}</Link>
          </td>
          <td style={{width: '60%'}}>
              {description}
          </td>
          <td>
              <button
                  className={btnClassInfo}
                  onClick={handleEdit}> Edit
              </button>
          </td>
          <td>
              <button
                  className={btnClassDanger}
                  onClick={handleDelete}> Delete
              </button>
          </td>
      </tr>
  )  
};

export default connect()(RecipeTitleRow);