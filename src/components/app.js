import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
    }
    
    componentDidMount = () => {
        
    };
    
    render = () => {
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