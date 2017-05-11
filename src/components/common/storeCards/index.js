import React, {Component} from 'react'


export default class StoreCards extends Component {
    render(){
        const {
            cards
        } = this.props



        return (
            <div>{cards.length}</div>
        )
    }
}
