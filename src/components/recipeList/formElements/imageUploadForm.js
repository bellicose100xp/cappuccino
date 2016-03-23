import React from 'react';
import {connect} from 'react-redux'

const ImageUpload = ({handleImageRef, handleResultRef}) => {
    return (
        <div className="form-group">
            <label htmlFor="file-chooser">Upload Recipe Image</label>
            <input
                className="btn btn-default"
                type="file"
                id="file-chooser"
                ref={handleImageRef}
            />

            <div
                id="results"
                className="help-block"
                ref={handleResultRef}
            ></div>
        </div>
    )
};

export default connect()(ImageUpload);