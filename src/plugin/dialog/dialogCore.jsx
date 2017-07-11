import React, {Component} from 'react';
import CSSModules from 'react-css-modules'
import styles from './dialogCore.css'

@CSSModules(styles)
export default class DialogCore extends Component {
    static propTypes = {
        resolve: Function,
        rej: Function,
        renderFn: Function
    }



    constructor (props) {
        super()
        this.state = {}
    }


    render () {
        const {
            resolve,
            rej,
            renderFn
        } = this.props

        return (
            <div styleName="dialogWrapper">
                <div styleName="layout">
                    {renderFn(this)}
                    <div>
                        <button onClick={() => resolve(this.state)}>confirm</button>
                        <button onClick={() => rej(this.state)}>cancel</button>
                    </div>
                </div>
            </div>
        )
    }



    enterHandle = e => {
        if (e.keyCode === 13) {
            this.props.resolve(this.state)
        }
    }
}