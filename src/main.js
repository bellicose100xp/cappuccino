import 'babel-polyfill'
import 'isomorphic-fetch'

import './css/bootstrap.css'
import './css/app.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import {IndexRoute, Router, Route, Link, browserHistory} from 'react-router'

import App from './app'
import Homepage from './components/homepage'
import InputForm from './components/recipeList/inputForm'
import RecipeTitle from './components/recipeList/recipeTitle'
import RecipeInputAndTitle from './components/recipeList/inputAndTitleList'
import IngredientInoutForm from './components/ingredientList/ingredientForm'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Homepage}/>
                <Route path="data" component={InputForm}/>
                <Route path="recipes" component={RecipeTitle}/>
                <Route path="input" component={RecipeInputAndTitle}/>
                <Route path="/recipe/:recipeId" component={IngredientInoutForm}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#root')
);