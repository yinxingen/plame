import React ,{Component} from 'react'

import Header from '../header'
import Footer from '../footer'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import gameData from '../../../redux/ActionCreators/gameDataActions'
import store from '../../../redux/store'


class GameType extends Component{
	componentWillMount(){
		this.props.gameData.gameDataHandler()
	}	
	
	render(){
		let {pathname} = this.props.location
		let data = store.getState().gameData.gameDatas.classList
//		console.log(data)
		return(
			<div className="main-box">
			<Header text={"分类"}/>
			<div className="gameType-box">
				{
					data?data.map(item=>(
						<div className="gameType" key={item.id}>
							<div className="gameType-left">
								<i className="game-img">
									<img src={item.image} alt={item.name}/></i>
								<span>{item.name}</span>
							</div>
							<div className="gameType-right">
								<p className="fa fa-angle-right"></p>
							</div>
						</div>
					)):''
				}
			</div>
			<Footer pathname={pathname} />
			</div>
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		gameData:bindActionCreators(gameData,dispatch)
	}
})(GameType)