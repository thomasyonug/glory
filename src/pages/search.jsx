import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './search.css'

import { routeHook } from 'decorators'


@routeHook
@CSSModules(styles)
export default class Search extends Component{
    constructor(props) {
        super()
    }

    render () {
        return (
            <div>searching</div>
        )
    }
}