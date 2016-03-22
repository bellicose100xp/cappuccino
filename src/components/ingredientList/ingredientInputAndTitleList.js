/**
 * Created by HSO on 3/21/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import IngredientForm from './ingredientForm'
import IngredientTitle from './ingredientTitle'
import {getChildItems} from '../../actionCreators/firebaseActions'
import {INGREDIENTS} from '../../constants/constants'

function mapStateToProps(state, ownProps) {

    return {
        id: ownProps.params.recipeId
    }
}

class RecipeInputAndTitle extends React.Component {
    componentDidMount = () => {

        let {id, dispatch} = this.props;

        let pathInfo = {
            id,
            name: INGREDIENTS
        };

        dispatch(getChildItems(pathInfo));

    };

    render = () => {

        let {id} = this.props;
        //  console.log(id);

        return (
            <div>
                <IngredientForm
                    id={id}
                />
                <IngredientTitle
                    id={id}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(RecipeInputAndTitle);