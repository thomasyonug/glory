import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.css'
import {connect} from 'react-redux'
import {cardClasses} from 'resource'
import { routeHook } from 'decorators'

import BottomBar from './bottomBar'
import RightBar  from './rightBar'

@connect(
    state => {
        return {
            cardGroups: state.arrengement.cardGroups || 'loading'
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
            choosedCardGroupIndex: null
        }
    }

    componentWillMount () {
        this.$ws.gameApi.arrengement_getCardGroups()
    }

    render(){
        const {
            choosedCardGroupIndex
        } = this.state

        const {
            cardGroups
        } = this.props

        const {
            changeHandle,
            chooseHandle,
            unchooseHandle,
            saveHandle
        } = this

        return (
            <div>
                <RightBar
                    ref={(ref) => this.rightBar = ref}
                    cardGroup={cardGroups[choosedCardGroupIndex]}
                    onSave={saveHandle}
                ></RightBar>
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
                                    <button onClick={() => chooseHandle(cardClass)}>choose</button>
                                    <button onClick={() => unchooseHandle(cardClass)}>unchoose</button>
                                </div>
                            </div>
                        )
                    })
                }
                <BottomBar 
                    cardGroups={cardGroups}
                    onChangeCardGroupIndex={changeHandle}
                ></BottomBar>
            </div>
        )
    }


    chooseHandle = cardClass => {
        this.rightBar.pushCard(cardClass) 
    }


    saveHandle = cardGroup => {
        this.$ws.gameApi.arrengement_updateCardGroup(cardGroup)
    }




    changeHandle = index => {
        this.setState({
            choosedCardGroupIndex: index
        })
    }
}