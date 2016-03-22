import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const RecipeTitleRow = ({id, title, description}) => {
  return (
      <tr>
          <td>
            <Link to={`/recipes/${id}`}>{title}</Link>
          </td>
          <td>
              {description}
          </td>
      </tr>
  )  
};

export default connect()(RecipeTitleRow);