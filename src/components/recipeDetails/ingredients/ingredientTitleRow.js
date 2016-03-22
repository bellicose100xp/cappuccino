import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipeInfoAction} from '../../../actionCreators/firebaseActions'

const IngredientTitleRow = ({id, name, pathInfo, dispatch}) => {

    let handleDelete = event => {
        event.preventDefault();
       dispatch(deleteRecipeInfoAction(id, pathInfo));
    };

    return (
        <tr>
            <td>
                {name}
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

export default connect()(IngredientTitleRow);