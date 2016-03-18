import {
    WINDOW_RESIZE
} from '../constants/constants'

export const windowResizeAction = (width, height) => {
    return {
        type: WINDOW_RESIZE,
        width,
        height
    }
};
