import React, { Component } from 'react';

class Card extends Component {

    state = {
        clicked: false
    }

    clickedCard = () => {
        this.setState(previousState => {
            return {
                clicked: !previousState.clicked
            }
        })
    }

    render() {
        let frontCard = (
            <div className='card' onClick={(this.clickedCard)}>
                <h1>
                    Hello
                </h1>
            </div>
        )

        let backCard = (
            <div className='card' onClick={(this.clickedCard)}>
                <h1>
                    World!
                </h1>
            </div>
        )

        return (
            !this.state.clicked? frontCard : backCard
        )
    }
}

export default Card;