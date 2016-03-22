/**
 * Created by admin on 3/19/2016.
 */
import {
    FIREBASE_URL,
    FIREBASE_URL_NO_JSON,
    UPDATE_RECIPES_FROM_SERVER,
    UPDATE_CHILD_ITEMS_FROM_SERVER
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
    //  console.log(dataAsArray);
    store.dispatch({
        type: UPDATE_RECIPES_FROM_SERVER,
        dataAsArray
    })
});

export const getChildItems = pathInfo => dispatch => {
    const childRef = new Firebase(`${FIREBASE_URL_NO_JSON}${pathInfo.id}/${pathInfo.name}/`);
    childRef.once('value', function (snapshot) {
        const dataAsArray = convertToArray(snapshot.val());
        //   console.log('inside getChildItem Actions...',dataAsArray);
        dispatch({
            type: UPDATE_CHILD_ITEMS_FROM_SERVER,
            dataAsArray,
            ...pathInfo
        })
    })
};

// export const requestAllRecipes = () => dispatch =>
//     fetch(FIREBASE_URL)
//         .then(res => res.json())
//         .then(data => {
//             const dataAsArray = convertToArray(data);
//             dispatch({
//                 type: UPDATE_RECIPES_FROM_SERVER,
//                 dataAsArray
//             })
//         });

// pathInfo must be {id, name}, where name is name of route after _key
export const addRecipeInfoAction = (itemToAdd, pathInfo) => dispatch => {

    // if the info we are adding it is part of recipe then add the info the path specified
    let firebaseUrlToAdd = pathInfo ?
        `${FIREBASE_URL_NO_JSON}${pathInfo.id}/${pathInfo.name}.json` : FIREBASE_URL;

    return fetch(firebaseUrlToAdd, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
    })
        .then(res => res.json())
        .then(() => {
            if(pathInfo) dispatch(getChildItems(pathInfo));
        })
        .catch(err => {
            console.log('add request failed: ', err);
        });
};

//
export const modifyRecipeInfoAction = (id, keyToModify, valueToModifyTo, pathInfo) => dispatch => {
    let firebaseUrlToModify = pathInfo ?
        `${FIREBASE_URL_NO_JSON}${pathInfo.id}/${pathInfo.name}/${id}.json` : `${FIREBASE_URL_NO_JSON}${id}.json`;

    fetch(firebaseUrlToModify, {
        method: 'PATCH',
        body: JSON.stringify({
            [keyToModify]: valueToModifyTo
        })
    })
        .then(res => res.json())
        .then(() => {
            if(pathInfo) dispatch(getChildItems(pathInfo));
        })
        .catch(err => {
            console.log('patch request failed: ', err);
        });
};

export const deleteRecipeInfoAction = (id, pathInfo) => dispatch => {
    let firebaseUrlToModify = pathInfo ?
        `${FIREBASE_URL_NO_JSON}${pathInfo.id}/${pathInfo.name}/${id}.json` : `${FIREBASE_URL_NO_JSON}${id}.json`;

    fetch(firebaseUrlToModify, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(() => {
            if(pathInfo) dispatch(getChildItems(pathInfo));
        })
        .catch(err => {
            console.log('patch request failed: ', err);
        });
};