import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.scss'
import {connect} from 'react-redux'
import {cardClassMap} from 'resource'
import { routeHook } from 'decorators'
import {autobind} from 'core-decorators'


@connect(
    state => {
        return {
            cardGroups: state.arrengement.cardGroups || 'loading',
            usingGroup: state.arrengement.usingGroup  || 'no choose'
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
            choosedCards: [],
            choosedCardGroup: {},
            usingGroup: {},
            rightBarStyle: "rightBarClose"
        }
    }

    componentWillMount () {
        this.$ws.gameApi.arrengement_getCardGroups()
        this.$ws.gameApi.arrengement_getUsingGroup()
    }

    componentDidUpdate () {
        this.scrollWrapper.scrollTop = this.scrollWrapper.scrollHeight 
    }

    render(){
        const {
            choosedCards,
            rightBarStyle
        } = this.state
        const {
            cardGroups,
            usingGroup
        } = this.props

        return (
            <div>
                <div styleName={rightBarStyle} ref={scrollWrapper => this.scrollWrapper = scrollWrapper} >
                    <div>
                        {choosedCards.map((choosedCard, index) => 
                            <div key={index}>{choosedCard.cardName}</div> 
                        )}
                    </div>
                    <div styleName="buttonArea">
                        <button onClick={() => this.saveHandle()}>save</button>
                        <button onClick={() => this.createCardGroupHandle()}>新建</button>
                    </div>
                </div>

                <div>now using cardGroup:  { usingGroup.groupName}</div>
                <div>
                    <button onClick={() => this.chooseUsingGroup()}>choose usingGroup</button>
                </div>

                <div styleName="chooseCards">
                    {
                        [...cardClassMap.values()].map(cardClass => {
                            const instance = new cardClass()
                            return (
                                <div key={cardClass} styleName="chooseCard">
                                    <div styleName="cardProty">
                                        <span styleName="cardAttack">{instance.attack == null ? '' : `${instance.attack}`}</span>
                                        <span styleName="cardDefence">{instance.defence == null ? '' : `${instance.defence}`}</span>
                                    </div>
                                    <div styleName="cardName">{instance.cardName}</div>
                                    <div styleName="cardInstro">{instance.describe}</div>
                                    
                                    <div styleName="chooseBtn">
                                        <button onClick={() => this.chooseHandle(cardClass)}>choose</button>
                                        <button onClick={() => this.unchooseHandle(cardClass)}>unchoose</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div styleName="bottomBar">
                    {   cardGroups.length > 0 ?
                        cardGroups.map(cardGroup => 
                            <div styleName="cardGroup" key={cardGroup._id} onClick={() => this.chooseCardGroup(cardGroup)}>
                                <h3>{cardGroup.groupName}</h3>
                                <div>something here</div>
                                <div>
                                    <button onClick={() => this.deleteHandle(cardGroup)}>delete</button>
                                </div>
                            </div> 
                        )
                        :
                        'loading'
                    }
                </div>
            </div>
        )
    }

    @autobind
    chooseHandle (cardClass) {
        console.log(`choosedCards: ${JSON.stringify(this.state.choosedCards)}`)
        console.log(`cardClass: ${cardClass.cardCode}`)
        // if (this.state.choosedCards.filter((item) => { return item.cardCode === cardClass.cardCode}).length >= 3) return
        if (this.state.choosedCards.length > 40) return
        let newcard = {cardName:cardClass.cardName , cardCode:cardClass.cardCode}
        this.setState({
            choosedCards: [
                ...this.state.choosedCards,
                newcard 
            ]
        })
    }

    unchooseHandle (cardClass) {
        this.setState({
            choosedCards: this.state.choosedCards.$delete(item => item.cardCode === cardClass.cardCode)
        })
    }

    chooseCardGroup (cardGroup) {
        let cards = []
        cardGroup.cards.forEach((item) => {
            cards.push({
                cardName: cardClassMap.get(item.cardCode).cardName,
                cardCode: item.cardCode
            })
        })
        this.setState({
            choosedCards: cards,
            chooseCardGroup: cardGroup,
            rightBarStyle: "rightBar"
        })
    }

    chooseUsingGroup () {
        this.setState({
            usingGroup: {groupName: this.state.chooseCardGroup.groupName}
        }, () => {
            this.$ws.gameApi.arrengement_updateUsingGroup(this.state.usingGroup)
        })
    }

    saveHandle () {
        let cards = this.state.choosedCards 
        this.setState({
            chooseCardGroup: {
                    ...this.state.chooseCardGroup,
                    cards
            }
        }, () => {
            this.$ws.gameApi.arrengement_updateCardGroup(this.state.chooseCardGroup)
        })
    }

    createCardGroupHandle () {
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

    deleteHandle (cardGroup) {
        this.$dialogConfirm(<div>确认删除此卡组？</div>)
        .then(() => {
            this.$ws.gameApi.arrengement_deleteCardGroup(cardGroup)
        })
        .catch(() => {
        })

    }

}