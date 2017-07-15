import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types';

@CSSModules(Styles)
export default class BattleField extends Component {
    static propTypes = {
        cards: PropTypes.array
    }


    render () {
        const {
            cards
        } = this.props


        return (
            <div>
                <ul>
                    {cards.map(card => 
                        <li>
                            <card></card>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

