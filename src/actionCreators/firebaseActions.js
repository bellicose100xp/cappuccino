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

// nothing to 'dispatch' here so the second param dispatch is empty.
export const addRecipeInfoAction = (itemToAdd, pathInfo) => dispatch => {
    
    // if the info we are adding it is part of recipe then add the info the path specified
    let FIREBASE_URL_TO_ADD = pathInfo ?
        `${FIREBASE_URL_NO_JSON}${pathInfo.id}/${pathInfo.name}.json` : FIREBASE_URL;
    
    return fetch(FIREBASE_URL_TO_ADD, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
    })
        .then(res => res.json())
        .then(data => {
            console.log('inside addRecipeInfoAction...', data);
            dispatch(getChildItems(pathInfo))
        });
};