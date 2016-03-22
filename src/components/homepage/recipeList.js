/**
 * Created by admin on 3/19/2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import {windowResizeAction} from '../../actionCreators/actionCreators'
import RecipeBlock from './recipesBlock'

const mapStateToProps = state => {
    return {
        width: state.windowResizeReducer.width,
        height: state.windowResizeReducer.height,
        recipes: state.recipes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleWindowResizeEvent: (w, h) => {
            dispatch(windowResizeAction(w, h))
        }
    }
};

let calcWidthAndHeight = (w, h) => {
    let size = {elemWidth: 300, elemHeight: 200};
    if (w < 360) {
        return size;
    }

    let ratio = w / 320;
    let ratioRounded = Math.floor(ratio);

    let horizontalPadding = (ratioRounded - 1) * 10 + 20;
    let elementWidth = ( w - horizontalPadding ) / ratioRounded;

    return {
        elemWidth: elementWidth,
        elemHeight: elementWidth * 0.67,
        blocksPerRow: ratioRounded
    }
};

class RecipeList extends React.Component {
    constructor() {
        super();
    }

    resizeEventListenerFunction = () => {
        let {innerWidth, innerHeight} = window;
        this.props.handleWindowResizeEvent(innerWidth, innerHeight);
    };


    componentDidMount = () => {
        window.addEventListener('resize', this.resizeEventListenerFunction)
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resizeEventListenerFunction)
    };

    render = () => {
        let {width, height, recipes} = this.props;
        let {elemWidth, elemHeight, blocksPerRow} = calcWidthAndHeight(width, height);
        
        let foodItemContainerStyle = {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            width: elemWidth,
            height: elemHeight
        };

        // height is set to zero in sass
        let emptyFoodItemContainerStyle = {
            width: elemWidth
        };

        return (
            <div>
                <div className="food-list-container">

                    {recipes.map(recipe => {
                        return <RecipeBlock
                            key={recipe.id}
                            {...recipe}
                            foodItemContainerStyle={foodItemContainerStyle}
                        />
                    })}

                    {Array.from(Array(blocksPerRow - 1).keys()).map(id => {
                        return <div
                            key={id}
                            className="food-item-container"
                            style={emptyFoodItemContainerStyle}>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);