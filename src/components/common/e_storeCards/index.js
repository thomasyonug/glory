import React, {Component} from 'react'


export default class E_storeCards extends Component {
    render(){
        const {
            cards
        } = this.props


        return (
            <div>
                {cards.length}
            </div>
        )
    }
}