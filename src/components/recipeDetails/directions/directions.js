import React from 'react'
import {connect} from 'react-redux'
import convertParaToOrderedList from '../../utils/convertParaToOrderedList'
import {modifyRecipeInfoAction} from '../../../actionCreators/firebaseActions'
import {DIRECTIONS} from '../../../constants/constants'

const Directions = ({id, directions, dispatch}) => {
        let directionsData;
        let previewNode;
        // this is to make sure the component is mounted
        setTimeout(() => {directionsData.value = directions},0);
        const handleSubmit = event => {
            event.preventDefault();
            dispatch(modifyRecipeInfoAction(id, DIRECTIONS, directionsData.value));
            console.log();
        };
        let changeHandler = () => {
            previewNode.innerHTML = convertParaToOrderedList(directionsData.value);
        };
        return (
            <div className="container form-div">
                <form>
                    <div className="form-group">
                        <label htmlFor="directions">Directions:</label>
                    <textarea
                        name="directions"
                        id="directions"
                        className="form-control"
                        type="text"
                        rows="10"
                        ref={node => {directionsData = node}}
                        onChange={changeHandler}
                    />
                    </div>

                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </form>
                <div className="panel panel-default">
                    <div className="panel-heading">Live Preview</div>
                    <div
                        ref={node => {previewNode = node}}
                        className="panel-body"
                    ></div>
                </div>
            </div>
        )
    }

export default connect()(Directions);