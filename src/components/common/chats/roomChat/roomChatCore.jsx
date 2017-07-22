import React, {Component} from 'react'
import Styles             from './roomChatCore.css'
import CSSModules         from 'react-css-modules'
import SendCore           from '../sendCore'






@CSSModules(Styles)
export class RoomChatCore extends Component {

    constructor (props) {
        super(props)
        Object.assign(this, {})
    }

    render () {
        const {
            msgs
        } = this.props

        return (
            <div styleName="chatInfoShow">
                <div styleName="chatInfoShowMain" ref={scrollWrapper => this.scrollWrapper = scrollWrapper} >
                    {
                        msgs.map((msgItem,index) => 
                            <div key={index}>
                                <span>{msgItem.from}:</span>     
                                <span>{msgItem.text}</span>     
                            </div> 
                        )
                    }
                </div>
                <div styleName="sendChatInfo">
                    <SendCore></SendCore>
                </div>
            </div>
        )
    }

    componentDidUpdate () {
        this.scrollWrapper.scrollTop = this.scrollWrapper.scrollHeight 
    }
}