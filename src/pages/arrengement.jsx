import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.css'
import {connect} from 'react-redux'
import {cardClasses} from 'resource'
import { routeHook } from 'decorators'




@connect(
    state => {
        return {
            cardGroups: state.arrengement.cardGroups
        }
    },
    dispatch => {
        return {
        }
    }
)
@routeHook
@CSSModules(styles)
export default class Arrengement extends Component{
    constructor(props) {
        super(props)
        this.state = {
            choosedCards: []
        }
    }

    componentWillMount () {
        this.$ws.gameApi.arrengement_getCardGroups()
    }

    render(){
        const {
            choosedCards
        } = this.state
        const {
            cardGroups
        } = this.props

        return (
            <div>
                <div styleName="rightBar">
                    {choosedCards.map((choosedCard, index) => 
                        <div key={index}>{choosedCard.name}</div> 
                    )}
                    <div styleName="buttonArea">
                        <button onClick={this.saveHandle}>save</button>
                        <button onClick={this.createCardGroupHandle}>新建</button>
                    </div>
                </div>

                {
                    [...cardClasses.MonsterCardMap.values()].map(cardClass => {
                        const instance = new cardClass()
                        return (
                            <div key={cardClass}>
                                <div>{instance.name}</div>
                                <div>
                                    <span>{instance.attack}</span>
                                    <span>{instance.defence}</span>
                                </div>
                                <div>
                                    <button onClick={() => this.chooseHandle(cardClass)}>choose</button>
                                    <button onClick={() => this.unchooseHandle(cardClass)}>unchoose</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div styleName="bottomBar">
                    {   cardGroups.length > 0 ?
                        cardGroups.map(cardGroup => 
                            <div styleName="cardGroup" key={cardGroup._id}>
                                <h3>{cardGroup.groupName}</h3>
                                <div>something here</div>
                                <div>
                                    <button onClick={() => this.deleteHandle(cardGroup)}>delete</button>
                                </div>
                            </div> 
                        ) 
                        :
                        <div>loading</div>
                    }
                </div>
            </div>
        )
    }

    chooseHandle = cardClass => {
        if (this.state.choosedCards.filter(item => cardClass).length >= 3) return
        this.setState({
            choosedCards: [
                ...this.state.choosedCards,
                cardClass
            ]
        })
    }

    unchooseHandle = cardClass => {
        this.setState({
            choosedCards: this.state.choosedCards.$delete(item => item === cardClass)
        })
    }

    saveHandle = () => {
    }

    createCardGroupHandle = () => {
        const dialogContentRender = (dialogContext) => {
            return (
                <input
                    type="text" 
                    placeholder="group Name"
                    onKeyDown={dialogContext.enterHandle}
                    value={dialogContext.state.groupName || ""}
                    ref={input => dialogContext.input = input}
                    onChange={(e) => dialogContext.setState({groupName: e.target.value})}
                />
            )
        } 
        this.$dialog(dialogContentRender, function(){this.input.focus()})
        .then(state => {
            this.$ws.gameApi.arrengement_addCardGroup({
                groupName: state.groupName
            })
        })
        .catch(err => {}) 
    }

    deleteHandle = cardGroup => {
        this.$dialogConfirm(<div>确认删除此卡组？</div>)
        .then(() => {
            this.$ws.gameApi.arrengement_deleteCardGroup(cardGroup)
        })
        .catch(() => {
        })

    }

}