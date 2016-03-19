// import reducers

import thunkMiddleware from  'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import windowResizeReducer from '../reducers/windowResizeReducer'

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    windowResizeReducer
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