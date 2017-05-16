import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ac from 'reduxs/actions'










export const operator = (Target) => {
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
    class Wrapper extends Component{
        render(){
            return (
                <Target 
                    {...this.props}
                    getCardToHandFromStore={this.getCardToHandFromStore}
                ></Target>
            )
        }


        getCardToHandFromStore = () => {
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
    return Wrapper
}