import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';
import {CardFace} from 'components/common/card'


import {autobind} from 'core-decorators'
import {attackCtrl} from 'decorators'

import {connect} from 'react-redux'



@connect(
    state => {
        return {
            summonAble: state.battleField.summonAble
        }
    },
    dispatch => {
        return {
            _click: index => dispatch({
                type: 'CLICK_BATTLE_FIELD',
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
                                <li key={index} styleName="itemActive" onClick={() => this.click(index)}>empty</li> 
                                :
                                <li key={index} styleName="item" onClick={() => this.click(index)}>empty</li> 

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
    @attackCtrl({
        card (index) {
            return this.props.firstArea[index]
        }
    })
    attack (index) {
        this.props._attack(index)
    }

}

