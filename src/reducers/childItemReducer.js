import {UPDATE_CHILD_ITEMS_FROM_SERVER} from '../constants/constants'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CHILD_ITEMS_FROM_SERVER:
            return Object.assign({}, state,{
                [action.name] : {
                    [action.id] : [...action.dataAsArray]
                }
            });
        default:
            return state;
    }
}