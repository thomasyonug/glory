import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import styles from './game.css'






@CSSModules(styles)
export default class Game extends Component{
    render(){
        // const {match} = this.props        


        return (
            <div styleName='wrapper'>
                <div>
                    <Link to={`/start`}>start</Link>
                </div>
                <div>option</div>
                <div>quit</div>
            </div>
        )
    }
}