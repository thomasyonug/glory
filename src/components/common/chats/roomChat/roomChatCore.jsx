import React, {Component} from 'react'
import Styles             from './roomChatCore.css'
import CSSModules         from 'react-css-modules'
import SendCore           from '../sendCore'

@CSSModules(Styles)
export class RoomChatCore extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        const {
            msgs
        } = this.props

        return (
            <div>

                {
                    msgs.map((msgItem,index) => 
                        <div key={index}>
                            <span>{msgItem.from}:</span>     
                            <span>{msgItem.text}</span>     
                        </div> 
                    )
                }

                <div>
                    <SendCore></SendCore>
                </div>
            </div>
        )
    }
}