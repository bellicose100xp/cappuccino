import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const IngredientTitleRow = ({name}) => {
    return (
        <tr>
            <td>
                {name}
            </td>
        </tr>
    )
};

export default connect()(IngredientTitleRow);