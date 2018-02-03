import React ,{Component} from 'react'

import Header from '../header'
import Footer from '../footer'


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import billboardData from '../../../redux/ActionCreators/biilboardDataActions'
import store from '../../../redux/store'


class BillBoard extends Component{
	constructor(props){
		super(props)
		this.state={
			navs:[
				{title:'总榜',type:1,id:1},
				{title:'新锐',type:2,id:2}
			],
			page:1,
			type:1,
			isShow:true,
			top:0
		}
	}
	componentWillMount(){
		this.props.billboardData.homeDataHandler(this.state.type)
	}
	
	changeShow(type){
		
		this.setState({
			type
//			gameList:[]
		})
		this.props.billboardData.homeDataHandler(type)
		
	}
	
	
	render(){
		let {pathname} = this.props.location
		let {navs} = this.state
		let data = store.getState().billboardData.billboardDatas.gameList
//		console.log(data)
		
		return(
			<div className="main-box">
				<Header text={"榜单"}/>
				<div className="title">
					{
						navs?navs.map(item=>(
							<p  
							key={item.id} 
							onClick={()=>this.changeShow(item.type)}
							className={this.state.type===item.type?'active':''}>
								{item.title}
							</p>
						)):""
					}
				</div>
				
				<div className='theme2-box gameList'>
					{
						data?data.map((theme2,i)=>(
							<div className="theme2-item" key={theme2.id}>
								<div className='theme2-left'>
								<span className="number">{i+1}</span>
									<img src={theme2.image} alt={theme2.name}/>
									<div className='word-box word-box2'>
										<p>{theme2.name}</p>
										<p className="theme2-list" style={{'background':theme2.labelList[0].color}}>{theme2.labelList[0].name}</p>
										<p className="last-p">{theme2.description}</p>
									</div>
								</div>
								<button className="startGame">开始</button>
							</div>
						)):''
					}	
					
				</div>
				<Footer pathname={pathname}/>
			</div>
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		billboardData:bindActionCreators(billboardData,dispatch)
	}
})(BillBoard)