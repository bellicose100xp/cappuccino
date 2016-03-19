import {WINDOW_RESIZE} from '../constants/constants'

export default (state = {
    width: 300,
    height: 200
}, action) => {
    switch (action.type) {
        case WINDOW_RESIZE:
            return Object.assign({}, state, {
                width: action.width,
                height: action.height
            });
        default:
            return state
    }
}


