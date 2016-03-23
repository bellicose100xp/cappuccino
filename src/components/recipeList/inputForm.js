import React from 'react'
import {connect} from 'react-redux'
import {addRecipeInfoAction} from '../../actionCreators/firebaseActions'

let InputForm = ({dispatch}) => {
        let recipe = {};
        let imageToUpload, results;

        const callAddRecipeInfoAction = () => {

            const recipeToAdd = ({
                title: recipe.title.value,
                description: recipe.description.value,
                imageUrl: recipe.imageUrl
            });

            dispatch(addRecipeInfoAction(recipeToAdd));

            recipe.title.value = '';
            recipe.description.value = '';
            imageToUpload.value = '';
        };

        //Secret key amazon
        AWS.config.update({
            accessKeyId: 'AKIAI3M7MD34JEI4CB5Q',
            secretAccessKey: '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'
        });

        // this is required
        AWS.config.region = 'us-west-2';

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
                        callAddRecipeInfoAction();
                    }

                });
            } else {
                results.innerHTML = 'Nothing to upload.';
            }
        };

        const handleSubmit = event => {
            event.preventDefault();
            handleImageUpload();
        };

        return (
            <div className="container form-div">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Recipe Title</label>
                        <input
                            name="title"
                            id="title"
                            type="text"
                            className="form-control"
                            ref={node => {recipe.title = node}}
                            placeholder="Enter Recipe Title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Recipe Title</label>
                <textarea
                    name="description"
                    id="description"
                    type="text"
                    className="form-control"
                    ref={node => {recipe.description = node}}
                    placeholder="Enter Recipe Description"
                />
                    </div>

                    <div className="form-group">
                        <label htmlFor="file-chooser">Upload Recipe Image</label>
                        <input
                            className="btn btn-default"
                            type="file"
                            id="file-chooser"
                            ref={node => {imageToUpload = node}}
                        />

                        <div
                            id="results"
                            className="help-block"
                            ref={node => {results = node}}
                        ></div>
                    </div>

                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>

                </form>
            </div>
        )
    }
    ;

export default connect()(InputForm);