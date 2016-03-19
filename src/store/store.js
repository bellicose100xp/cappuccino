// import reducers

import thunkMiddleware from  'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import windowResizeReducer from '../reducers/windowResizeReducer'

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    windowResizeReducer
});

const configureStore = initialState => {
    return createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};

export default configureStore();

