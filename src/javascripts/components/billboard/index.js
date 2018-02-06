import React ,{Component} from 'react'

import Header from '../header'
import Footer from '../footer'


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import biilboardDataActions from '../../../redux/ActionCreators/biilboardDataActions'

class BillBoard extends Component{
	constructor(props){
		super(props)
		this.state={
			navs:[
				{title:'总榜',type:1,id:1},
				{title:'新锐',type:2,id:2}
			],
			isLoadMore:true
		}
		this.type=1,
		this.page=1
	}
	componentWillMount(){
		// console.log(this.props)
		this.props.biilboardDataActions.biilboardHandler(this.type,this.page)
	}
	
	loadMore(){
		this.page++
		this.props.biilboardDataActions.biilboardHandler(this.type,this.page)
	}

	changeShow(type){
		this.type=type
		this.page=1
		this.props.biilboardDataActions.biilboardHandler(type,this.page)
		
	}
	
	
	render(){
		// console.log(this)
		let {pathname} = this.props.location
		let {navs} = this.state
		let data = this.props.billboardData.billboardDatas
		return(
			<div className="main-box">
				<Header text={"榜单"}/>
				<div className="title">
					{
						navs?navs.map(item=>(
							<p  
							key={item.id} 
							onClick={()=>this.changeShow(item.type)}
							className={this.type===item.type?'active':''}>
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
				<div className='load-More' onClick={this.state.isLoadMore?()=>this.loadMore():alert('数据已经加载完毕了')}>
					{
						this.state.isLoadMore?'点击加载更多':''
					}
				</div>	
				<Footer pathname={pathname}/>
			</div>
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		biilboardDataActions:bindActionCreators(biilboardDataActions,dispatch)
	}
})(BillBoard)