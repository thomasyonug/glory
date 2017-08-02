import React, {Component} from 'react'
import {connect} from 'react-redux'
// import * as ac from 'reduxs/actions'




export const routeHook = Target => {
    @connect(
        state => {
            return {
                logined: state.user.logined
            }
        },
        dispatch => {
            return {
            }
        }
    )
    class Wrapper extends Component{
        componentDidMount () {
           !this.props.logined && (window.location = '#/login')
        }
        render(){
            return (
                <Target 
                    {...this.props}
                ></Target>
            )
        }
    }
    return Wrapper
}