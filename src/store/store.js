// import reducers

import thunkMiddleware from  'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger();
import {createStore, combineReducers, applyMiddleware} from 'redux'

const rootReducer = combineReducers({
    //reducer list here
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const configureStore = initialState => createStoreWithMiddleware(
    rootReducer,
    initialState
);

export default configureStore();