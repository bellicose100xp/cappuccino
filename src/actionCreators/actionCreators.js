import {
    WINDOW_RESIZE,
    EDIT_RECIPE,
    DONE_EDIT_RECIPE
} from '../constants/constants'

export const windowResizeAction = (width, height) => {
    return {
        type: WINDOW_RESIZE,
        width,
        height
    }
};

export const editRecipe = recipe => {
    return {
        type: EDIT_RECIPE,
        recipe: recipe
    }
};

export const doneEditRecipe = () => {
    return {
        type: DONE_EDIT_RECIPE
    }
};