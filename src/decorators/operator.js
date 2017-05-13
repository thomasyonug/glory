import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'






export const test = (Component) => {
    @connect(
        state => {
            return {
                storeCards: state.storeCards
            }
        },
        dispatch => {
            return {
                deleteStoreCards: content => dispatch(ac.deleteStoreCardsActionCreator(content)),
                addHandCards: content => dispatch(ac.addHandCardsActionCreator(content))
            }
        }
    )
    class Test extends Component{
        constructor(){
            super()
        }
        render(){
            return (
                <Component 
                    {...this.props}
                    getCard = {this.getCard}
                ></Component>
            )
        }


        getCard = () => {
            const {
                storeCards,
                deleteStoreCards,
                addHandCards
            } = this.props
            const index = 0
            const card = storeCards.cards[index]
            deleteStoreCards({index})
            addHandCards(card)
        }
    }
    return Test
}