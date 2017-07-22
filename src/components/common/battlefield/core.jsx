import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';
import {CardFace} from 'components/common/card'





import {connect} from 'react-redux'



@connect(
    state => {
        return {
            summonAble: state.battleField.summonAble
        }
    },
    dispatch => {
        return {
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
                            <li key={index} styleName="item">
                                <CardFace
                                    card={card}
                                ></CardFace>
                            </li>
                        )
                    } else {
                        const wrapper = 
                            summonAble ? 
                                <li key={index} styleName="itemActive">empty</li> 
                                : 
                                <li key={index} styleName="item">empty</li> 



                        return (
                            wrapper
                        )
                    }
                })}
            </ul>
        )
    }
}

