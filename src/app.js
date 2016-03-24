import React from 'react'
import {connect} from 'react-redux'
import StatusBar from './components/statusBar/statusBar'

let Homepage = ({children}) => {
    return (
        <div>
            <StatusBar />
            {children}
        </div>
    )
};

export default connect()(Homepage);