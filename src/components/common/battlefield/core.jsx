import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';
import {CardFace} from 'components/common/card'


import {autobind} from 'core-decorators'
import {attackCtrl} from 'decorators'

import {connect} from 'react-redux'
import {
    ROUND_NAME_PLAY,
    CLICK_BATTLE_FIELD,
    CLICK_BATTLE_FIELD_EMPTY,
} from 'reduxs/constant'



@connect(
    state => {
        return {
            summonAble: state.battleField.summonAble
        }
    },
    dispatch => {
        return {
            _click: index => dispatch({
                type: CLICK_BATTLE_FIELD,
                content: {
                    index
                }
            }),
            _clickEmpty: index => dispatch({
                type: CLICK_BATTLE_FIELD_EMPTY,
                content: {
                    index
                }
            }),
            _attack: index => dispatch({
                type: 'ATTACK_READY',
                content: {
                    index
                }
            })
        }
    }
)
@CSSModules(Styles)
export default class BattleField extends Component {


    static propTypes = {
        firstArea: PropTypes.array
    }



    render () {
        const {
            firstArea,
            summonAble
        } = this.props





        return (
            <ul styleName="wrapper">
                {firstArea.map((card,index)=> {
                    if (card) {
                        return (
                            <li key={index} styleName="item" onClick={() => this.click(index)}>
                                <CardFace
                                    card={card}
                                    slot={
                                        <button onClick={() => this.attack(index)}>attack</button>
                                    }
                                ></CardFace>
                            </li>
                        )
                    } else {
                        const wrapper = 
                            summonAble ? 
                                <li key={index} styleName="itemActive" onClick={() => this.clickEmpty(index)}>empty</li> 
                                :
                                <li key={index} styleName="item" onClick={() => this.clickEmpty(index)}>empty</li> 

                        return (
                            wrapper
                        )
                    }
                })}
            </ul>
        )
    }


    @autobind
    click (index) {
        this.props._click(index)
    }

    @autobind
    clickEmpty (index) {
        this.props._clickEmpty(index)
    }



    @autobind
    @attackCtrl({
        card (index) {
            return this.props.firstArea[index]
        },
        illegalHandler (err) {
            return this.$dialogAuto(`u cant attack now`)
        },
        validateRound: [
            ROUND_NAME_PLAY
        ]
    })
    attack (index) {
        this.props._attack(index)
    }

}

