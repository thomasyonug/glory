import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import Styles from './start.css'



import StoreCards from 'components/common/storeCards'





const arr = new Array(40)

@CSSModules(Styles)
export default class Start extends Component{
    render(){
        return (
            <div styleName='wrapper'>
                <div styleName='top-field'>
                   <div className='fleft' styleName='e-storeCard-field'>
                     <StoreCards cards={arr}></StoreCards>
                   </div> 
                   <div className='fright' styleName='e-handCard-field'>
                   </div> 
                </div>
                <div styleName='battle-field'>

                </div>
                <div styleName='bottom-field'>
                   <div className='fleft' styleName='handCard-field'></div> 
                   <div className='fright' styleName='storeCard-field'>
                     <StoreCards cards={arr}></StoreCards>
                   </div> 
                </div>
            </div>
        )
    }
}