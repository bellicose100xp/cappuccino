import React from 'react'
import {connect} from 'react-redux'

const Description = ({handleRef}) => {
    return (
        <div className="form-group">
            <label htmlFor="description">Recipe Title</label>
                        <textarea
                            name="description"
                            id="description"
                            type="text"
                            className="form-control"
                            ref={handleRef}
                            placeholder="Enter Recipe Description"
                        />
        </div>
    )
};

export default connect()(Description);
