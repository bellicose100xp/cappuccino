import {
    SET_RECIPE_EDIT_BACKGROUND,
    RESET_RECIPE_EDIT_BACKGROUND
} from '../constants/constants'

export default (state = false, action) => {
    switch (action.type) {
        case SET_RECIPE_EDIT_BACKGROUND:
            return true;
        case RESET_RECIPE_EDIT_BACKGROUND:
            return false;
        default:
            return state
    }
}