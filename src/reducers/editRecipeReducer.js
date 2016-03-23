import {EDIT_RECIPE, DONE_EDIT_RECIPE} from '../constants/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case EDIT_RECIPE:
            return {...action.recipe};
        case DONE_EDIT_RECIPE:
            return {};
        default:
            return state;
    }
}