import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';

import {CardFace} from 'components/common/card'


import {connect} from 'react-redux'
import{autobind} from 'core-decorators'

import {
    CLICK_E_BATTLE_FIELD,
    CLICK_E_BATTLE_FIELD_EMPTY,
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
                type: CLICK_E_BATTLE_FIELD,
                content: {
                    index
                }
            }),
            _clickEmpty: index => dispatch({
                type: CLICK_E_BATTLE_FIELD_EMPTY,
                content: {
                    index
                }
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
            firstArea
        } = this.props


        return (
            <ul styleName="wrapper">
                {firstArea.map((card,index)=> {
                    if (card) {
                        return (
                            <li 
                                key={index} 
                                styleName="item"
                                onClick={() => this.click(index)}
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
                                onClick={() => this.clickEmpty(index)}>
                                    empty
                            </li>
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

}

