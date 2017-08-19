import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';

import {CardFace} from 'components/common/card'


import {connect} from 'react-redux'
import {autobind} from 'core-decorators'
import {getElPosition} from 'util'




import {
    CLICK_E_BATTLE_FIELD,
    CLICK_E_BATTLE_FIELD_EMPTY,
} from 'reduxs/constant'

@connect(
    state => {
        return {
            activeAttackAble: state.e_battleField.activeAttackAble
        }
    },
    dispatch => {
        return {
            _click: (index, event) => dispatch({
                type: CLICK_E_BATTLE_FIELD,
                content: {
                    index
                },
                event: {
                    ...getElPosition(event.target)
                }
            }),
            _clickEmpty: (index, event) => dispatch({
                type: CLICK_E_BATTLE_FIELD_EMPTY,
                content: {
                    index
                },
                event: {
                    ...getElPosition(event.target)
                }
                // toString () {
                //     return {
                //         ...this,
                //         event: {
                //             ...getElPosition(event.target)
                //         }
                //     }
                // }
            })
        }
    }
)
@CSSModules(Styles)
export default class EBattleField extends Component {
    static propTypes = {
        firstArea: PropTypes.array
    }


    render () {
        const {
            firstArea,
            activeAttackAble
        } = this.props


        return (
            <ul styleName="wrapper">
                {firstArea.map((card,index)=> {
                    if (card) {
                        return (
                            <li 
                                key={index} 
                                styleName={activeAttackAble ? 'activeItem' : 'item'}
                                onClick={(e) => this.click(index, e)}
                                >
                                <CardFace
                                    card={card}
                                ></CardFace>
                            </li>
                        )
                    } else {
                        return (
                            <li 
                                key={index} 
                                styleName="item" 
                                onClick={(e) => this.clickEmpty(index, e)}>
                                    empty
                            </li>
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
        this.props._clickEmpty(index, e)
    }

}

