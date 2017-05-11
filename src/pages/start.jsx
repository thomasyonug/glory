import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Styles from './start.css'


import StoreCards from 'components/common/storeCards'
import EStoreCards from 'components/common/e_storeCards'
import HandCards from 'components/common/handCards'
import EHandCards from 'components/common/e_handCards'
import Operator  from 'components/common/operator'
//actionCreators
import * as ac from 'reduxs/actions'







@connect(
    state => {
        return {
            storeCards: state.storeCards.cards,
            e_storeCards: state.e_storeCards.cards,
            handCards: state.handCards.cards,
            e_handCards: state.e_handCards.cards
        }
    },
    dispatch => {
        return {
            addStoreCards: content => dispatch(ac.addStoreCardsActionCreator(content)),
            deleteStoreCards: content => dispatch(ac.deleteStoreCardsActionCreator(content))
        }
    }
)
@CSSModules(Styles)
export default class Start extends Component{
    render(){
        const {
            storeCards,
            e_storeCards,
            handCards,
            e_handCards
        } = this.props

        return (
            <div styleName='wrapper'>
                <div styleName='top-field'>
                   <div className='fleft' styleName='e-storeCard-field'>
                     <EStoreCards cards={e_storeCards}></EStoreCards>
                   </div> 
                   <div className='fright' styleName='e-handCard-field'>
                     <EHandCards cards={e_handCards}></EHandCards>
                   </div> 
                </div>
                <div styleName='battle-field'>

                </div>
                <div styleName='bottom-field'>
                   <div className='fleft' styleName='handCard-field'>
                     <HandCards cards={handCards}></HandCards>
                   </div> 
                   <div className='fright' styleName='storeCard-field'>
                     <StoreCards cards={storeCards}></StoreCards>
                   </div> 
                </div>
                <Operator></Operator>
            </div>
        )
    }
}