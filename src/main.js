import 'babel-polyfill'
import 'isomorphic-fetch'

import './css/bootstrap.css'
import './css/app.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import {IndexRoute, Router, Route, browserHistory} from 'react-router'

import App from './app'
import Homepage from './components/homepage/homepage'
import RecipeInputAndTitle from './components/recipeList/inputAndTitleList'
import Ingredient from './components/recipeDetails/receipeDetailsController'
import Directions from './components/recipeDetails/directions/directions'
import Content from './components/content/content'


//console.log(process.env.NODE_ENV);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Homepage}/>
                <Route path="recipes" component={RecipeInputAndTitle}/>
                <Route path="recipes/:recipeId" component={Ingredient}/>
                <Route path="directions" component={Directions}/>
                <Route path="/:recipeId" component={Content}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#root')
);