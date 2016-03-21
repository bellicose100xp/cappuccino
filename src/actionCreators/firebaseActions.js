/**
 * Created by admin on 3/19/2016.
 */
import {
    FIREBASE_URL,
    FIREBASE_URL_NO_JSON,
    UPDATE_RECIPES_FROM_SERVER
} from '../constants/constants'
import _ from 'lodash'
import Firebase from 'firebase';
import store from '../store/store';

const ref = new Firebase(FIREBASE_URL_NO_JSON);

const convertToArray = data => {
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            data[key].id = key;
        }
    }
    return _.values(data);
};

// it fires once in the beginning and then every time there's a change
ref.on('value', snapshot => {
    const dataAsArray = convertToArray(snapshot.val());
    store.dispatch({
        type: UPDATE_RECIPES_FROM_SERVER,
        dataAsArray
    })
});

export const requestAllRecipes = () => dispatch =>
    fetch(FIREBASE_URL)
        .then(res => res.json())
        .then(data => {
            const dataAsArray = convertToArray(data);
            dispatch({
                type: UPDATE_RECIPES_FROM_SERVER,
                dataAsArray
            })
        });

export const addRecipesAction = recipe => dispatch =>
    fetch(FIREBASE_URL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

export const addRecipesDetailAction = (recipeDetails, pathInfo) => dispatch =>
    fetch(FIREBASE_URL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeDetails)
    });