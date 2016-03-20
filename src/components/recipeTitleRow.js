import React from 'react'
import {connect} from 'react-redux'

const RecipeTitleRow = ({key, title, description}) => {
  return (
      <tr key={key}>
          <td>
              {title}              
          </td>
          <td>
              {description}
          </td>
      </tr>
  )  
};

export default connect()(RecipeTitleRow);