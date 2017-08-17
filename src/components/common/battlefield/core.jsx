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
            summonAble: state.battleField.summonAble,
            activeIndex: state.battleField.activeIndex
        }
    },
    dispatch => {
        return {
            _click: (index, event) => dispatch({
                type: CLICK_BATTLE_FIELD,
                content: {
                    index
                },
                event,
                toString () {
                    return {...this, event: ['event']}
                }
            }),
            _clickEmpty: (index, event) => dispatch({
                type: CLICK_BATTLE_FIELD_EMPTY,
                content: {
                    index
                },
                event,
                toString () {
                    return {...this, event: ['event']}
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
            summonAble,
            activeIndex
        } = this.props





        return (
            <ul styleName="wrapper">
                {firstArea.map((card,index)=> {
                    if (card) {
                        return (
                            <li 
                                key={index} 
                                styleName={activeIndex === index ? 'itemActive' : 'item'} 
                                onClick={(e) => this.click(index, e)}>
                                <CardFace
                                    card={card}
                                ></CardFace>
                            </li>
                        )
                    } else {
                        const wrapper = 
                            summonAble ? 
                                <li key={index} styleName="itemActiveEmpty" onClick={(e) => this.clickEmpty(index, e)}>empty</li> 
                                :
                                <li key={index} styleName="item" onClick={(e) => this.clickEmpty(index, e)}>empty</li> 

                        return (
                            wrapper
                        )
                    }
                })}
            </ul>
        )
    }


    @autobind
    click (index, e) {
        e.persist()
        this.props._click(index, e)
    }

    @autobind
    clickEmpty (index, e) {
        e.persist()
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

