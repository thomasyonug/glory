import React, {Component} from 'react'
import Styles from './operator.css'
import CSSModules from 'react-css-modules'
import Meta from './meta'




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
        
        return (
            <div styleName={`wrapper ${mini ? 'minify' : ''}`}>
                <Meta minifyClick={minify}></Meta>
                <div styleName='cube'>get card</div>
            </div>
        )
    }


    minify = () => {
        this.setState({mini: !this.state.mini})
    }
}