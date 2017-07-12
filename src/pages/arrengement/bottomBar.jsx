import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './arrengement.css'

@CSSModules(styles)
export default class BottomBar extends Component {
    static PropTypes = {
        resolve: Function,
        rej: Function,
        renderFn: Function
    }

    constructor(props){
        super()
        this.state = {
            choosenCardGroup: null
        }
    }


    render () {
        const {cardGroups} = this.props
        const {choosenCardGroupIndex} = this.state

        return <div styleName="bottomBar">
            {
                cardGroups.map((cardGroup,index) => 
                    <div 
                        styleName={index === choosenCardGroupIndex ? "choosenCardGroup" : "cardGroup"}
                        key={cardGroup._id}
                        onClick={() => this.clickHandle(index)}
                    >
                        <h3>{cardGroup.groupName}</h3>
                        <div>something here</div>
                        <div>
                            <button onClick={() => this.deleteHandle(cardGroup)}>delete</button>
                        </div>
                    </div> 
                )
            }
        </div>
    }

    deleteHandle = cardGroup => {
        this.$dialogConfirm(<div>确认删除此卡组？</div>)
        .then(() => {
            this.$ws.gameApi.arrengement_deleteCardGroup(cardGroup)
        })
        .catch(() => {
        })
    }

    clickHandle = index => {
        this.setState({
            choosenCardGroupIndex: index
        }) 
        this.props.onChangeCardGroupIndex && this.props.onChangeCardGroupIndex(index)
        
    }

    
}