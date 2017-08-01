import React, {Component} from 'react'
import Styles from './dashboard.scss'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import Tip from 'components/standard/tip'

@connect(
    state => {
        return {
            currentRound: state.god.roundState
        }
    },
    dispatch => {
        return {
        }
    }
)
@CSSModules(Styles)
export default class Dashboard extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            styleObj: {}
        }
    }
    render () {
        const {
            currentRound
        } = this.props

        const {
            clickHandle
        } = this
        
        const {
            styleObj
        } = this.state

        return (
            <div 
                style={styleObj}
                styleName="wrapper">
                <div styleName='roundName'>
                    {currentRound}
                </div>
                <Tip 
                    wrapperStyleObj={{
                        height: '100%',
                        width: '10px',
                        right: '-10px'
                    }}
                    onClick={clickHandle}
                ></Tip>
            </div>
        )
    }


    clickHandle = tipContext => {
        this.setState({
            styleObj: {
                left: this.state.styleObj.left === '-300px' ? '0px' : '-300px'
            }
        })
    }
}


