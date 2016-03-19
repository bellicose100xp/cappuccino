import React from 'react'
import {connect} from 'react-redux'
import {windowResizeAction} from '../actionCreators/actionCreators'

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

class App extends React.Component {
    constructor() {
        super();
        console.log(this.props);
    }

    resizeEventListenerFunction = () => {
        let {innerWidth, innerHeight} = window;
        this.props.handleWindowResizeEvent(innerWidth, innerHeight);
    };


    componentDidMount = () => {
        window.addEventListener('resize',this.resizeEventListenerFunction)
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', resizeEventListenerFunction)
    };

    render = () => {
        console.log(this.props);
        return (
            <div className="main-container">
                <div className="my-head">Cappuccino Cat</div>
                <div className="food-list-container">
                    <div
                        className="food-item-container"
                        style={{
                backgroundImage: 'url(./images/img1_rotisserie_chicken.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
                }}>
                        <div className="food-item">Rotisserie Chicken</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={{
                backgroundImage: 'url(./images/img2_breakfast_plate.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
                }}>
                        <div className="food-item">Breakfast Plate</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={{
                backgroundImage: 'url(./images/img3_curry.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
                }}>
                        <div className="food-item">Curry Pork</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={{
                backgroundImage: 'url(./images/img4_desserts.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
                }}>
                        <div className="food-item">Desserts</div>
                    </div>
                    <div
                        className="food-item-container"
                        style={{
                backgroundImage: 'url(./images/img5_cabbage.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
                }}>
                        <div className="food-item">Cabbage Food</div>
                    </div>
                    <div className="food-item-container">
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);