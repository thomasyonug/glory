import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import Meta from './meta'
import {operator} from 'decorators'


@operator
@CSSModules(Styles,{allowMultiple: true})
export default class Operator extends Component{
    constructor(){
        super()
        this.state = {
            mini: false
        }
    }
    render () {
        const {
            minify
        } = this
        const {
            mini
        } = this.state
        const {
            getCardToHandFromStore
        } = this.props




        return (
            <div styleName={`wrapper ${mini ? 'minify' : ''}`}>
                <Meta minifyClick={minify}></Meta>
                <div styleName='cube' onClick={getCardToHandFromStore}>get card</div>
                <div styleName='cube'>finish round</div>
            </div>
        )
    }


    minify = () => {
        this.$http.post('/api/test').then(body => {
            console.log(body)
        })
        this.setState({mini: !this.state.mini})
    }
    

}