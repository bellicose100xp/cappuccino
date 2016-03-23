import '../utils/amazon'
import React from 'react'
import {connect} from 'react-redux'
import {addRecipeInfoAction, modifyRecipeInfoAction} from '../../actionCreators/firebaseActions'
import {doneEditRecipe} from '../../actionCreators/actionCreators'
import Title from './formElements/inputTitle'
import Description from './formElements/inputDescription'
import ImageUpload from './formElements/imageUploadForm'
import _ from 'lodash'

const mapStateToProps = state => {
    return {
        recipeToEdit: state.editRecipe
    }
};

let InputForm = ({recipeToEdit, dispatch}) => {
    let recipe = {}, imageToUpload, results;
    let modify = !_.isEmpty(recipeToEdit);
    let defaultImage = 'https://buggys3.s3-us-west-2.amazonaws.com/grey_image.png';

    // set timeout is to make sure the component is loaded
    setTimeout(() => {
        if(modify) {
            recipe.title.value = recipeToEdit.title;
            recipe.description.value = recipeToEdit.description;
        }
    },0);

    const clearFields = () => {
        recipe.title.value = '';
        recipe.description.value = '';
        imageToUpload.value = '';
    };

    const callAddModifyRecipeInfoAction = () => {

        let recipeToAdd = ({
            title: recipe.title.value,
            description: recipe.description.value,
            imageUrl: recipe.imageUrl || recipeToEdit.imageUrl || defaultImage
        });

        //add or modify
        if (recipeToEdit.id) {
            dispatch(modifyRecipeInfoAction(recipeToEdit.id, null, null, null, recipeToAdd))
        } else {
            dispatch(addRecipeInfoAction(recipeToAdd));
        }

       clearFields();
    };

    const bucket = new AWS.S3({params: {Bucket: 'buggys3'}});

    const handleImageUpload = () => {
        let file = imageToUpload.files[0];
        if (file) {
            results.innerHTML = '';
            var params = {
                ACL: 'public-read-write',
                StorageClass: "REDUCED_REDUNDANCY",
                Key: file.name,
                ContentType: file.type,
                Body: file
            };
            bucket.upload(params, function (err, data) {
                if (err) {
                    console.log('upload error', err);
                    results.innerHTML = 'Upload Error, Contact Admin';
                } else {
                    recipe.imageUrl = data.Location;
                    callAddModifyRecipeInfoAction();
                }
            });
        } else {
            if (recipeToEdit) {
                callAddModifyRecipeInfoAction();
            } else {
                results.innerHTML = 'Image not present, default image will be used';
                setTimeout(() => { results.innerHTML = ''}, 3000);
                callAddModifyRecipeInfoAction();
            }
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleImageUpload();
    };

    const handleCancelEdit = event => {
        event.preventDefault();
        dispatch(doneEditRecipe());
        clearFields();
    };

    return (
        <div className="container form-div">
            <form>
                <Title handleRef={node => {recipe.title = node}}/>
                <Description handleRef={node => {recipe.description = node}}/>
                <ImageUpload
                    handleImageRef={node => {imageToUpload = node}}
                    handleResultRef={node => {results = node}}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                > {modify ? 'Modify' : 'Submit'}
                </button>

                {modify ?
                    <button
                        className="btn btn-default"
                        onClick={handleCancelEdit}
                    > Cancel
                    </button>  : null
                }
            </form>
        </div>
    )
};

export default connect(mapStateToProps)(InputForm);