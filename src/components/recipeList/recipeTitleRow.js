import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {deleteRecipeInfoAction} from '../../actionCreators/firebaseActions'

const RecipeTitleRow = ({id, title, description, dispatch}) => {

    let handleDelete = event => {
        event.preventDefault();
        dispatch(deleteRecipeInfoAction(id));
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
                  className="btn btn-danger"
                  onClick={handleDelete}
              >
                  Delete
              </button>
          </td>
      </tr>
  )  
};

export default connect()(RecipeTitleRow);