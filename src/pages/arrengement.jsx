import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.css'
import {connect} from 'react-redux'
import {cardClasses} from 'resource'

@connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
        }
    }
)
@CSSModules(styles)
export default class Arrengement extends Component{
    constructor(props) {
        super(props)
        this.state = {
            choosedCards: []
        }
    }

    render(){
        const {
            choosedCards
        } = this.state


        return (
            <div>
                <div styleName="rightBar">
                    {choosedCards.map((choosedCard, index) => 
                        <div key={index}>{choosedCard.name}</div> 
                    )}
                </div>

                {
                    [...cardClasses.MonsterCardMap.values()].map(cardClass => {
                        const instance = new cardClass()
                        return (
                            <div key={cardClass}>
                                <div>{instance.name}</div>
                                <div>
                                    <span>{instance.attack}</span>
                                    <span>{instance.defence}</span>
                                </div>
                                <div>
                                    <button onClick={() => this.chooseHandle(cardClass)}>choose</button>
                                    <button onClick={() => this.unchooseHandle(cardClass)}>unchoose</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

    chooseHandle = cardClass => {
        if (this.state.choosedCards.includes(cardClass)) return 

        this.setState({
            choosedCards: [
                ...this.state.choosedCards,
                cardClass
            ]
        })
    }

    unchooseHandle = cardClass => {
        this.setState({
            choosedCards: this.state.choosedCards.$deleteByItem(item => item === cardClass)
        })
    }

}