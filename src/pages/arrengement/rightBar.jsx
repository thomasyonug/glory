import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.css'

@CSSModules(styles)
export default class RightBar extends Component {
    static PropTypes = {
        resolve: Function,
        rej: Function,
        renderFn: Function
    }

    constructor(props){
        super()
        this.state = {
            editingCards: []
        }
    }
    componentWillReceiveProps () {
        if (!this.props.cardGroup) return
        this.setState({
            editingCards: [...this.props.cardGroup.cards]
        })
    }

    render () {
        const {
            cardGroup
        } = this.props

        const {
            editingCards
        } = this.state

        const {
            createCardGroupHandle,
            saveHandle
        } = this
        
        let content

        if (cardGroup) {
            content = (
                <div>
                    <div>{cardGroup.groupName}</div>
                    {editingCards.map((card, index) => 
                        <div key={index}>{card.name}</div> 
                    )}
                </div>
            )
        } else {
            content = (
                <div></div>
            )
        }


        return (
                <div styleName="rightBar">
                    {content}
                    <div styleName="buttonArea">
                        <button onClick={saveHandle}>save</button>
                        <button onClick={createCardGroupHandle}>新建</button>
                    </div>
                </div>
        )
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

    saveHandle = () => {
        const cardGroup = {
            groupName: this.props.cardGroup.groupName,
            cards: this.state.editingCards.map(card => ({cardCode: card.constructor.cardCode}))
        }
        this.props.onSave(cardGroup)
    }

    pushCard = cardClass => {
        if (!this.props.cardGroup) {
            this.$dialogConfirm(<div>请先选择一个卡组</div>)
            return
        }
        this.setState({
            editingCards: [
                ...this.state.editingCards,
                new cardClass()
            ]
        })
    }
    
}