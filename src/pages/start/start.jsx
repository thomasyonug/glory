import React, {Component} from 'react'
import CSSModules         from 'react-css-modules'
import {connect}          from 'react-redux'
import Styles             from './start.css'


import StoreCards   from 'components/common/storeCards'
import EStoreCards  from 'components/common/e_storeCards'
import HandCards    from 'components/common/handCards'
import EHandCards   from 'components/common/e_handCards'
import Operator     from 'components/common/operator'
import BattleField  from 'components/common/battlefield'
import EBattleField from 'components/common/e_battlefield'
import Dashboard    from 'components/common/dashboard'




import {
    roundGuard
} from 'storeGuard'

import { routeHook } from 'decorators'





@connect(
    state => {
        return {
            storeCards: state.storeCards,
            e_storeCards: state.e_storeCards,
            handCards: state.handCards,
            e_handCards: state.e_handCards,
            battleField: state.battleField,
            e_battleField: state.e_battleField
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



    componentWillMount () {
        roundGuard.guard()
    }

    render(){
        const {
            storeCards,
            e_storeCards,
            handCards,
            e_handCards,
            battleField,
            e_battleField
        } = this.props

        return (
            <div styleName='wrapper'>
                <div styleName='top-field'>
                   <div className='fleft' styleName='e-storeCard-field'>
                     <EStoreCards 
                        cards={e_storeCards.cards}
                     ></EStoreCards>
                   </div> 
                   <div className='fright' styleName='e-handCard-field'>
                     <EHandCards 
                        cards={e_handCards.cards}
                     ></EHandCards>
                   </div> 
                </div>
                <div styleName='battle-field-all'>
                    <div styleName='e-battle-field'>
                        <EBattleField
                            firstArea={e_battleField.firstAreaCards}
                            secondArea={123}
                        >
                        </EBattleField>
                    </div>
                    <div styleName='battle-field'>
                        <BattleField
                            firstArea={battleField.firstAreaCards}
                            secondArea={123}
                        >
                        </BattleField>
                    </div>
                </div>
                <div styleName='bottom-field'>
                   <div className='fleft' styleName='handCard-field'>
                     <HandCards 
                        cards={handCards.cards}
                     ></HandCards>
                   </div> 
                   <div className='fright' styleName='storeCard-field'>
                     <StoreCards 
                        cards={storeCards.cards}
                     ></StoreCards>
                   </div> 
                </div>
                <Operator></Operator>
                <Dashboard></Dashboard>
            </div>
        )
    }

    componentWillUnmount () {
        roundGuard.unguard()
    }
}