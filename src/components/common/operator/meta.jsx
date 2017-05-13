import React, {Component} from 'react'
import Styles from './Meta.css'
import CSSModules from 'react-css-modules'

@CSSModules(Styles)
export default class Meta extends Component {

    render () {
        const {
            minifyClick
        } = this.props

        return (
            <div styleName="wrapper">
               <div styleName='minify' onClick={minifyClick}>m</div>
            </div>
        )
    }


}