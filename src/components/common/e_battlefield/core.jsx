import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';

import {CardFace} from 'components/common/card'

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
                            <li key={index} styleName="item">
                                <CardFace
                                    card={card}
                                ></CardFace>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index} styleName="item">
                                empty
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }
}

