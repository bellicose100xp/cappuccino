import {
    WINDOW_RESIZE,
    EDIT_RECIPE,
    DONE_EDIT_RECIPE,
    SET_RECIPE_EDIT_BACKGROUND,
    RESET_RECIPE_EDIT_BACKGROUND
} from '../constants/constants'

export const windowResizeAction = (width, height) => {
    return {
        type: WINDOW_RESIZE,
        width,
        height
    }
};

export const editRecipe = recipe => dispatch => {
    dispatch({
        type: SET_RECIPE_EDIT_BACKGROUND
    });

    setTimeout(() => {
            dispatch({
                type: RESET_RECIPE_EDIT_BACKGROUND
            })
        }, 1000
    );

    dispatch({
        type: EDIT_RECIPE,
        recipe: recipe
    })
};

export const doneEditRecipe = () => {
    return {
        type: DONE_EDIT_RECIPE
    }
};