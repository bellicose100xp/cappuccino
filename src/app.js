import React from 'react'
import {connect} from 'react-redux'

let Homepage = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default connect()(Homepage);