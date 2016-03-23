import React from 'react'
import {connect} from 'react-redux'

const Title = ({handleRef}) => {
    return (
        <div className="form-group">
            <label htmlFor="title">Recipe Title</label>
            <input
                name="title"
                id="title"
                type="text"
                className="form-control"
                ref={handleRef}
                placeholder="Enter Recipe Title"
            />
        </div>
    )
};

export default connect()(Title);