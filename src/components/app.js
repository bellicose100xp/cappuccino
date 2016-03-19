import React from 'react'
import {connect} from 'react-redux'
import {windowResizeAction} from '../actionCreators/actionCreators'
import {Link} from 'react-router'

const mapStateToProps = state => {
    return {
        width: state.windowResizeReducer.width,
        height: state.windowResizeReducer.height
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

    let horizontalPadding = (ratioRounded - 1)*10 + 20;
    let elementWidth = ( w - horizontalPadding ) / ratioRounded;

    return {elemWidth: elementWidth, elemHeight: elementWidth * 0.67}
};

class App extends React.Component {
    constructor() {
        super();
    }

    resizeEventListenerFunction = () => {
        let {innerWidth, innerHeight} = window;
        this.props.handleWindowResizeEvent(innerWidth, innerHeight);
    };


    componentDidMount = () => {
        window.addEventListener('resize',this.resizeEventListenerFunction)
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resizeEventListenerFunction)
    };

    render = () => {
        let {width, height} = this.props;
        let {elemWidth, elemHeight} = calcWidthAndHeight(width, height);
    //    console.log(elemWidth, elemHeight);

        let foodItemContainerStyle = {
            backgroundImage: 'url(./images/img1_rotisserie_chicken.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            width: elemWidth,
            height: elemHeight
        };

        let emptyFoodItemContainerStyle = {
            width: elemWidth
        };

        return (
            <div className="main-container">
                <div className="my-head">Cappuccino Cat <Link to="/data">Data Entry</Link> </div>
                <div className="food-list-container">
                    <div
                        className="food-item-container"
                        style={foodItemContainerStyle}>
                        <div className="food-item">Rotisserie Chicken</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img2_breakfast_plate.jpg)'
                        })}>
                        <div className="food-item">Breakfast Plate</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img3_curry.jpg)'
                        })}>
                        <div className="food-item">Curry Pork</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img4_desserts.jpg)'
                        })}>
                        <div className="food-item">Desserts</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img5_cabbage.jpg)'
                        })}>
                        <div className="food-item">Cabbage Food</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={foodItemContainerStyle}>
                        <div className="food-item">Rotisserie Chicken</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img2_breakfast_plate.jpg)'
                        })}>
                        <div className="food-item">Breakfast Plate</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img3_curry.jpg)'
                        })}>
                        <div className="food-item">Curry Pork</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img4_desserts.jpg)'
                        })}>
                        <div className="food-item">Desserts</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={Object.assign({}, foodItemContainerStyle,{
                        backgroundImage: 'url(./images/img5_cabbage.jpg)'
                        })}>
                        <div className="food-item">Cabbage Food</div>
                    </div>
                    <div className="food-item-container" style={emptyFoodItemContainerStyle}>
                    </div>
                    <div className="food-item-container" style={emptyFoodItemContainerStyle}>
                    </div>
                    <div className="food-item-container" style={emptyFoodItemContainerStyle}>
                    </div>
                    <div className="food-item-container" style={emptyFoodItemContainerStyle}>
                    </div>
                    <div className="food-item-container" style={emptyFoodItemContainerStyle}>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);