import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Styles from './start.css'


import StoreCards from 'components/common/storeCards'
import EStoreCards from 'components/common/e_storeCards'
import HandCards from 'components/common/handCards'
import EHandCards from 'components/common/e_handCards'
import Operator  from 'components/common/operator'
import { routeHook } from 'decorators'





@connect(
    state => {
        return {
            storeCards: state.storeCards,
            e_storeCards: state.e_storeCards,
            handCards: state.handCards,
            e_handCards: state.e_handCards
        }
    },
    dispatch => {
        return {
        }
    }
)
@routeHook
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
                     <EStoreCards cards={e_storeCards.cards}></EStoreCards>
                   </div> 
                   <div className='fright' styleName='e-handCard-field'>
                     <EHandCards cards={e_handCards.cards}></EHandCards>
                   </div> 
                </div>
                <div styleName='battle-field'>

                </div>
                <div styleName='bottom-field'>
                   <div className='fleft' styleName='handCard-field'>
                     <HandCards cards={handCards.cards}></HandCards>
                   </div> 
                   <div className='fright' styleName='storeCard-field'>
                     <StoreCards cards={storeCards.cards}></StoreCards>
                   </div> 
                </div>
                <Operator></Operator>
            </div>
        )
    }
}