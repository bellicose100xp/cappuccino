/**
 * Created by admin on 3/12/2016.
 */
import './css/bootstrap.css'
import './css/app.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import {IndexRoute, Router, Route, Link, browserHistory} from 'react-router'

import App from './app'
import Homepage from './components/homepage'
import InputForm from './components/inputForm'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Homepage}/>
                <Route path="data" component={InputForm}/>
            </Route>

        </Router>
    </Provider>,
    document.querySelector('#root')
);