/**
 * Created by HSO on 3/24/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const StatusBar = () => {
    return (
        <div className="main-container-row">
            <div className="status-nav">
                <Link to="/recipes">Recipe Data</Link>
            </div>
            <div className="status-nav">
                <Link to="/">Homepage</Link>
            </div>
        </div>
    )
};

export default connect()(StatusBar)