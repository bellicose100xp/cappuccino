import {UPDATE_RECIPES_FROM_SERVER} from '../constants/constants'

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_RECIPES_FROM_SERVER:
            return action.dataAsArray;
        default:
            return state;
    }
}