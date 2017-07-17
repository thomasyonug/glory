import React, {Component} from 'react'
import Styles from './core.css'
import CSSModules from 'react-css-modules'
import {
    func,
    node,
    object,
} from 'prop-types';

@CSSModules(Styles, {allowMultiple: true})
export default class Core extends Component {
    static propTypes = {
        onClick: func,
        content: node,
        wrapperStyleObj: object
    }

    static defaultProps = {
        wrapperStyleObj: {},
        content: ''
    }



    render () {
        const {
            onClick,
            content,
            wrapperStyleObj
        } = this.props


        return (
            <div 
                styleName={`wrapper`} 
                onClick={() => onClick(this)} 
                style={wrapperStyleObj}>
                {content}
            </div>
        )
    }


}